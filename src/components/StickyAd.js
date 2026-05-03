"use client";

import AdUnit from "./AdUnit";

export default function StickyAd() {
  return (
    <div
      className="position-fixed bottom-0 start-0 w-100 bg-body border-top text-center"
      style={{ zIndex: 1040 }}
    >
      <AdUnit slot="BOTTOM_SLOT_ID" />
    </div>
  );
}