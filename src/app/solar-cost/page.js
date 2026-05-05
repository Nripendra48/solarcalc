"use client";

import { useMemo, useState } from "react";
import Navbar from "../../components/Navbar";

const companies = [
  {
    id: "loom",
    name: "Loom Solar",
    type: "Fixed published price",
    pricePerKwMin: 60000,
    pricePerKwMax: 60000,
    note: "1kW Grid Connected Rooftop Solar System",
  },
  {
    id: "waaree",
    name: "Waaree",
    type: "Published price range",
    pricePerKwMin: 42000,
    pricePerKwMax: 60000,
    note: "1kW on-grid solar system price range",
  },
  {
    id: "vikram",
    name: "Vikram Solar",
    type: "Published price range",
    pricePerKwMin: 54000,
    pricePerKwMax: 120000,
    note: "Complete 1kW on-grid system range",
  },
];

const tataOffers = [
  { kw: 2, upfront: 7499, emi: 2499, tenure: 57 },
  { kw: 3, upfront: 9999, emi: 3209, tenure: 57 },
  { kw: 5, upfront: 24999, emi: 5999, tenure: 60 },
  { kw: 10, upfront: 49999, emi: 11909, tenure: 60 },
];

function formatINR(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

function estimateCost(company, kw) {
  const mid = (company.pricePerKwMin + company.pricePerKwMax) / 2;
  return mid * kw;
}

export default function SolarCostPage() {
  const [systemSize, setSystemSize] = useState(1);

  const comparison = useMemo(() => {
    return companies.map((company) => ({
      ...company,
      estimatedCost: systemSize
        ? estimateCost(company, Number(systemSize))
        : 0,
      midPerKw: (company.pricePerKwMin + company.pricePerKwMax) / 2,
    }));
  }, [systemSize]);

  return (
    <>
      <Navbar />

      <main className="container py-4 py-md-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="mb-4">
              <h1 className="mb-2">Solar Setup Cost by Company</h1>
              <p className="text-muted mb-0">
                Compare published 1 kW prices and estimate a system size quickly.
              </p>
            </div>

            <div className="card shadow-sm p-4 mb-4">
              <div className="row align-items-end g-3">
                <div className="col-12 col-md-6">
                  <label className="form-label">System Size (kW)</label>

                  <input
                    type="number"
                    inputMode="decimal"
                    min="1"
                    step="0.1"
                    className="form-control"
                    value={systemSize}
                    placeholder="e.g. 3"
                    onChange={(e) => {
                      const val = e.target.value;

                      if (val === "") {
                        setSystemSize("");
                      } else {
                        setSystemSize(val);
                      }
                    }}
                  />
                </div>

                <div className="col-12 col-md-6">
                  <div className="alert alert-info mb-0">
                    Estimated cost below uses the midpoint of each published range.
                  </div>
                </div>
              </div>
            </div>

            <div className="row g-4">
              {comparison.map((company) => (
                <div className="col-12 col-md-6 col-xl-4" key={company.id}>
                  <div className="card h-100 shadow-sm">
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{company.name}</h5>
                      <p className="text-muted small mb-3">{company.note}</p>

                      <div className="mb-3">
                        <div className="small text-muted">Published per kW</div>
                        <div className="fw-semibold">
                          {formatINR(company.pricePerKwMin)}
                          {company.pricePerKwMin !== company.pricePerKwMax
                            ? ` - ${formatINR(company.pricePerKwMax)}`
                            : ""}
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="small text-muted">
                          Estimated for {systemSize || 0} kW
                        </div>
                        <div className="fw-bold fs-5">
                          {formatINR(company.estimatedCost)}
                        </div>
                      </div>

                      <div className="mt-auto">
                        <span className="badge text-bg-secondary">
                          {company.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5">
              <h2 className="h4 mb-3">Tata Power Solar financing offers</h2>
              <div className="row g-4">
                {tataOffers.map((offer) => (
                  <div className="col-12 col-md-6 col-lg-3" key={offer.kw}>
                    <div className="card h-100 shadow-sm">
                      <div className="card-body">
                        <h5 className="card-title">{offer.kw} kW</h5>
                        <p className="mb-2">
                          Up-front: <strong>{formatINR(offer.upfront)}</strong>
                        </p>
                        <p className="mb-2">
                          EMI from: <strong>{formatINR(offer.emi)}</strong> / month
                        </p>
                        <p className="mb-0 text-muted small">
                          Tenure: {offer.tenure} months
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="alert alert-warning mt-4 mb-0">
                Tata’s public pages highlight financing and subsidy offers rather
                than a single direct 1 kW turnkey price.
              </div>
            </div>

            <div className="mt-5 card shadow-sm">
              <div className="card-body">
                <h2 className="h5">Notes</h2>
                <ul className="mb-0">
                  <li>Prices can change by city, roof type, inverter, and subsidy.</li>
                  <li>Use the published range as a guide, not a final quotation.</li>
                  <li>
                    You can later connect this page to a JSON file or CMS so updates
                    are easier.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}