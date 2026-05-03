import Navbar from "../components/Navbar";
import Link from "next/link";
import AdUnit from "../components/AdUnit";
import StickyAd from "../components/StickyAd";
import AdPopup from "../components/AdPopup";

export default function Home() {
  return (
    <>
      <Navbar />
      <AdPopup />

      <main className="container py-4 py-md-5">

        {/* 🔝 Top Banner Ad */}
        <div className="mb-4 text-center">
          <AdUnit slot="TOP_SLOT_ID" />
        </div>

        <h1 className="mb-4 text-center text-md-start">
          Solar Calculator⚡
        </h1>

        <div className="row g-3 g-md-4">
          {/* Card 1 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card shadow-sm p-3 h-100">
              <h5>Solar Generation</h5>
              <p className="flex-grow-1">
                Estimate daily and monthly output
              </p>
              <Link href="/solar" className="btn btn-primary w-100">
                Try Now
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card shadow-sm p-3 h-100">
              <h5>Battery Backup</h5>
              <p className="flex-grow-1">
                Calculate backup duration
              </p>
              <Link href="/battery" className="btn btn-primary w-100">
                Try Now
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card shadow-sm p-3 h-100">
              <h5>Electricity Bill</h5>
              <p className="flex-grow-1">
                Estimate your monthly bill
              </p>
              <Link href="/electricity" className="btn btn-primary w-100">
                Try Now
              </Link>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card shadow-sm p-3 h-100 border-primary">
              <h5>Solar Cost Comparison</h5>
              <p className="flex-grow-1">
                Compare setup cost across companies and estimate your total investment
              </p>
              <Link href="/solar-cost" className="btn btn-primary w-100">
                Estimate Cost
              </Link>
            </div>
          </div>
        </div>

        {/* 📍 Middle Ad */}
        <div className="my-5 text-center">
          <AdUnit slot="MIDDLE_SLOT_ID" />
        </div>

        {/* Optional content for SEO */}
        <div className="mt-4">
          <p className="text-muted">
            Use our tools to estimate solar generation, battery backup, and total system cost.
            These calculators are designed for Indian households and help you make better energy decisions.
          </p>
        </div>

      </main>

      {/* 📌 Sticky Bottom Ad */}
      <StickyAd />
    </>
  );
}