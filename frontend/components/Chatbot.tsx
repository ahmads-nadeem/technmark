"use client";

import { useEffect, useRef, useState } from "react";

type Message = { role: "user" | "assistant"; content: string };

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/gemini-chat`;

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const updated: Message[] = [...messages, { role: "user", content: text }];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated }),
      });
      if (!res.ok) throw new Error("Server error");
      const data = await res.json();
      setMessages([...updated, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages([
        ...updated,
        { role: "assistant", content: "Sorry! I can't give you any reply now. Please try Again" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-5 z-50">
      {open && (
        <div className="mb-3 flex h-[28rem] w-80 flex-col overflow-hidden rounded-xl border bg-white shadow-xl sm:w-96">
          <div className="flex items-center justify-between bg-[#0b2a1b] px-4 py-3 text-white">
            <span className="font-semibold">Chat with our AI Assitent</span>
            <button className="cursor-pointer" onClick={() => setOpen(false)} aria-label="Close chat">✕</button>
          </div>

          <div className="flex-1 space-y-2 overflow-y-auto p-3 text-sm">
            {messages.length === 0 && (
              <p className="text-gray-500">Hi! How can i help you?</p>
            )}
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
                <span
                  className={`inline-block max-w-[85%] whitespace-pre-wrap rounded-lg px-3 py-2 ${
                    m.role === "user" ? "bg-black text-white" : "bg-gray-100 text-black"
                  }`}
                >
                  {m.content}
                </span>
              </div>
            ))}
            {loading && <p className="text-gray-400">Typing...</p>}
            <div ref={bottomRef} />
          </div>

          <div className="flex gap-2 border-t p-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask your Question..."
              className="flex-1 rounded-lg border px-3 py-2 text-sm text-black outline-none"
            />
            <button
              onClick={send}
              disabled={loading}
              className="rounded-lg bg-black px-3 py-2 text-sm text-white disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        className="cursor-pointer ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-black text-2xl text-white shadow-lg hover:shadow-[0_0_25px_6px_rgba(0,230,118,0.55)]"
        aria-label="Open chat"
      >
        💬
      </button>
    </div>
  );
}