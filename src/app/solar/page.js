"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";

export default function SolarPage() {
  const [size, setSize] = useState("");
  const [daily, setDaily] = useState(null);
  const [monthly, setMonthly] = useState(null);

  const calculate = () => {
    if (!size) return;

    const dailyUnits = size * 4.5; // avg India
    const monthlyUnits = dailyUnits * 30;

    setDaily(dailyUnits.toFixed(2));
    setMonthly(monthlyUnits.toFixed(2));
  };

  return (
    <>
      <Navbar />

      <main className="container py-5">
        <h1 className="mb-4">Solar Generation Calculator</h1>

        <div className="card p-4 shadow-sm">
          <div className="mb-3">
            <label className="form-label">System Size (kW)</label>
            <input
              type="number"
              className="form-control"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              placeholder="e.g. 4.5"
            />
          </div>

          <button className="btn btn-primary" onClick={calculate}>
            Calculate
          </button>

          {daily && (
            <div className="mt-4">
              <p><strong>Daily Units:</strong> {daily} kWh [avg for India]</p>
              <p><strong>Monthly Units:</strong> {monthly} kWh [avg for India]</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}