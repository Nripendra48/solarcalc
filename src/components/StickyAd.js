"use client";

import AdUnit from "./AdUnit";

export default function StickyAd() {
  return (
    <>
      {/* Spacer to prevent content hiding */}
      <div style={{ height: "20px" }} />

      <div
        className="position-fixed bottom-0 start-0 w-100 bg-body border-top text-center"
        style={{ zIndex: 1040 }}
      >
        <div className="container py-1">
          <AdUnit slot="BOTTOM_SLOT_ID" />
        </div>
      </div>
    </>
  );
}