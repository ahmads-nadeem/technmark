"use client";
import { useEffect } from "react";
import "@n8n/chat/style.css";
import { createChat } from "@n8n/chat";

export default function N8nChat() {
  useEffect(() => {
    createChat({
      webhookUrl: "https://technmark.app.n8n.cloud/webhook/f011a720-2170-4853-aa70-eca437c12384/chat", // Yahan apna n8n ka production webhook URL dalein
      initialMessages: [
        "Hi there! 👋",
        "How can I help you with our services today?",
      ],
      i18n: {
        en: {
          closeButtonTooltip: "Close",
          title: "Chat with our AI Assistant",
          subtitle: "",
          footer: "Powered by n8n",
          getStarted: "New Conversation",
          inputPlaceholder: "Ask your question...",
        },
      },
    });
  }, []);
  return null; 
}