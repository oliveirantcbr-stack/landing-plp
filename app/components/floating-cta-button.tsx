"use client";

import Link from "next/link";
import type React from "react";

type GlassButtonProps = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  "aria-label"?: string;
};

export function GlassButton({
  href,
  onClick,
  children,
  className = "",
  ...rest
}: GlassButtonProps) {
  return (
    <>
      <style jsx global>{`
        .glass-button {
          --bg: rgba(18, 18, 18, 0.75);
          --border: rgba(255, 255, 255, 0.18);
          --border-hover: rgba(255, 255, 255, 0.35);
          --text: #ffffff;
          --shadow: rgba(0, 0, 0, 0.55);

          display: inline-flex;
          align-items: center;
          justify-content: center;

          padding: 0.55rem 1.4rem;
          font-family: "Inter", sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          line-height: 1;
          white-space: nowrap;

          color: var(--text);
          text-decoration: none;

          background: var(--bg);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);

          border: 1px solid var(--border);
          border-radius: 999px;

          box-shadow: 0 6px 24px var(--shadow);

          transition:
            background 0.25s ease,
            border-color 0.25s ease,
            transform 0.2s ease,
            box-shadow 0.25s ease;

          cursor: pointer;
        }

        .glass-button:hover {
          background: rgba(18, 18, 18, 0.9);
          border-color: var(--border-hover);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.65);
          transform: translateY(-1px);
        }

        .glass-button:active {
          transform: translateY(0);
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.6);
        }

        .glass-button:focus-visible {
          outline: none;
          box-shadow:
            0 0 0 2px rgba(255, 255, 255, 0.4),
            0 6px 24px rgba(0, 0, 0, 0.6);
        }

        @media (min-width: 640px) {
          .glass-button {
            padding: 0.65rem 1.6rem;
            font-size: 0.875rem;
          }
        }

        @media (min-width: 768px) {
          .glass-button {
            padding: 0.7rem 1.75rem;
          }
        }
      `}</style>

      {typeof href === "string" ? (
        <Link href={href} className={`glass-button ${className}`} {...rest}>
          {children}
        </Link>
      ) : (
        <button
          type="button"
          onClick={onClick}
          className={`glass-button ${className}`}
          {...rest}
        >
          {children}
        </button>
      )}
    </>
  );
}
