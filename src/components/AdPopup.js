"use client";

import { useEffect, useState } from "react";
import AdUnit from "./AdUnit";

export default function AdPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const shown = localStorage.getItem("adShown");

    if (!shown) {
      setTimeout(() => {
        setShow(true);
        localStorage.setItem("adShown", "true");
      }, 4000);
    }
  }, []);

  if (!show) return null;

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{ background: "rgba(0,0,0,0.6)", zIndex: 1050 }}
    >
      <div className="bg-body p-4 rounded shadow" style={{ maxWidth: "400px", width: "90%" }}>
        <h6>Sponsored</h6>

        <AdUnit slot="POPUP_SLOT_ID" />

        <button
          className="btn btn-sm btn-secondary mt-3 w-100"
          onClick={() => setShow(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
}