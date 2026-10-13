"use client";

import { useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  }

  return (
    <button
      onClick={copy}
      className="rounded-full border border-line px-4 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
