"use client";

import { useEffect } from "react";

export default function AdUnit({ slot, style = {} }) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  }, []);

  return (
    <div className="w-100 text-center">
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          width: "100%",
          minHeight: "90px", // prevents layout shift
          ...style,
        }}
        data-ad-client="ca-pub-XXXXXXXX"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}