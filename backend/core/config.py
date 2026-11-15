from pathlib import Path
# from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict
BaseUrl = Path(__file__).resolve().parent.parent
class Settings(BaseSettings):
    FRONTEND_ORIGIN: str = ""
    LLM_MODEL: str = "hello"
    LLM_BASE_URL: str = ""
    LLM_API_KEY: str =  ""
    model_config = SettingsConfigDict(
        env_file=BaseUrl / ".env", env_file_encoding="utf-8", extra="ignore"
    )
settings = Settings()