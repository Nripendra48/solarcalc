"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";

export default function ElectricityPage() {
  const [units, setUnits] = useState("");
  const [rate, setRate] = useState("");
  const [bill, setBill] = useState(null);

  const calculate = () => {
    if (!units || !rate) return;

    const total = units * rate;

    setBill(total.toFixed(2));
  };

  return (
    <>
      <Navbar />

      <main className="container py-5">
        <h1 className="mb-4">Electricity Bill Calculator</h1>

        <div className="card p-4 shadow-sm">
          <div className="mb-3">
            <label className="form-label">Units Consumed</label>
            <input
              type="number"
              className="form-control"
              value={units}
              onChange={(e) => setUnits(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Rate (₹/unit)</label>
            <input
              type="number"
              className="form-control"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
          </div>

          <button className="btn btn-primary" onClick={calculate}>
            Calculate
          </button>

          {bill && (
            <div className="mt-4">
              <p><strong>Total Bill:</strong> ₹ {bill}</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}