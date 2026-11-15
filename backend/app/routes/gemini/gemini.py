# from openai import OpenAI
# from openai.types.chat import ChatCompletionMessageParam
from typing import Literal
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field
from google import genai
from google.genai import types
from core.config import settings

router = APIRouter()
client = genai.Client(api_key=settings.LLM_API_KEY)
SYSTEM_PROMPT = """You are a helpful assistant for our company's website.
Reply in the same language and script the user writes in:
- Urdu script -> reply in Urdu script
- Roman Urdu -> reply in Roman Urdu
- English -> reply in English
Keep answers short, polite and clear.
If you don't know something about the company, say so and ask the user to contact the team."""


class Message(BaseModel):
    role: Literal["user", "assistant"]
    content: str = Field(min_length=1, max_length=2000)


class ChatRequest(BaseModel):
    messages: list[Message] = Field(min_length=1, max_length=20)


@router.post("/gemini-chat")
def chat(req: ChatRequest):
    contents = [
        types.Content(
            role="user" if m.role == "user" else "model",
            parts=[types.Part(text=m.content)],
        )
        for m in req.messages
    ]
    try:
        response = client.models.generate_content(
            model=settings.LLM_MODEL,
            contents=contents,
            config=types.GenerateContentConfig(
                system_instruction=SYSTEM_PROMPT,
                max_output_tokens=1000,
            ),
        )
        return {"reply": response.text or ""}
    except Exception as e:
        print("LLM error:", repr(e))
        raise HTTPException(status_code=502, detail="Chatbot abhi available nahi hai")
