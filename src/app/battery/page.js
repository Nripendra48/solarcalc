"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";

export default function BatteryPage() {
  const [ah, setAh] = useState("");
  const [voltage, setVoltage] = useState("");
  const [load, setLoad] = useState("");
  const [type, setType] = useState("tubular");
  const [backup, setBackup] = useState(null);

  // ✅ Convert decimal hours → hr + min
  const formatTime = (hoursDecimal) => {
    if (!hoursDecimal) return "";

    const hours = Math.floor(hoursDecimal);
    const minutes = Math.round((hoursDecimal - hours) * 60);

    if (hours === 0) return `${minutes} min`;
    if (minutes === 0) return `${hours} hr`;

    return `${hours} hr ${minutes} min`;
  };

  // ✅ Battery efficiency
  const getEfficiency = () => {
    switch (type) {
      case "flat":
        return 0.7;
      case "tubular":
        return 0.8;
      case "lithium":
        return 0.95;
      default:
        return 0.8;
    }
  };

  const calculate = () => {
    if (!ah || !voltage || !load) return;

    const efficiency = getEfficiency();

    const hours = (ah * voltage * efficiency) / load;

    setBackup(hours); // ✅ keep as number (not string)
  };

  return (
    <>
      <Navbar />

      <main className="container py-5">
        <h1 className="mb-4">Battery Backup Calculator</h1>

        <div className="card p-4 shadow-sm">
          {/* Battery Type */}
          <div className="mb-3">
            <label className="form-label">Battery Type</label>
            <select
              className="form-select"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="flat">Flat Plate</option>
              <option value="tubular">Tubular</option>
              <option value="lithium">Lithium-ion</option>
            </select>
          </div>

          {/* AH */}
          <div className="mb-3">
            <label className="form-label">Battery Ah</label>
            <input
              type="number"
              className="form-control"
              value={ah}
              onChange={(e) => setAh(e.target.value)}
              placeholder="e.g. 150"
            />
          </div>

          {/* Voltage */}
          <div className="mb-3">
            <label className="form-label">Voltage</label>
            <input
              type="number"
              className="form-control"
              value={voltage}
              onChange={(e) => setVoltage(e.target.value)}
              placeholder="e.g. 12"
            />
          </div>

          {/* Load */}
          <div className="mb-3">
            <label className="form-label">Load (W)</label>
            <input
              type="number"
              className="form-control"
              value={load}
              onChange={(e) => setLoad(e.target.value)}
              placeholder="e.g. 500"
            />
          </div>

          <button className="btn btn-primary" onClick={calculate}>
            Calculate
          </button>

          {backup && (
            <div className="mt-4">
              <p>
                <strong>Backup Time:</strong> {formatTime(backup)}
              </p>
              <p className="text-muted small">
                (Calculated with {Math.round(getEfficiency() * 100)}% efficiency)
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}