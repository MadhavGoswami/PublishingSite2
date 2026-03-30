"use client";

import { useState } from "react";
import Image from "next/image";

export default function AuthorSubmission() {
  const [file, setFile] = useState<File | null>(null);
  const [uploaded, setUploaded] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(selectedFile.type)) {
      alert("Only PDF or Word documents are allowed.");
      return;
    }

    setFile(selectedFile);
    setUploaded(true);
  };

  const handleSubmit = () => {
    alert("Manuscript submitted successfully!");
    setFile(null);
    setUploaded(false);
  };

  return (
    <section
      id="manu"
      className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-blue-50/70"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <p className="uppercase tracking-[0.24em] text-[11px] md:text-xs text-blue-600 mb-3 font-medium">
            Get Published
          </p>

          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 leading-tight">
            Submit Your Manuscript
          </h2>

          <p className="text-gray-600 mt-4 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Take the first step toward publication with a submission process
            designed to be simple, secure, and author-friendly.
          </p>

          <p className="text-sm text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
            You’ll receive a confirmation after submission, and our editorial
            team will review your manuscript within <span className="font-medium text-gray-700">3–5 business days</span>.
          </p>

          <div className="w-20 md:w-24 h-[3px] bg-blue-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <div className="bg-white rounded-[32px] border border-slate-200/80 shadow-xl p-6 md:p-8 lg:p-10">
            <div className="mb-8">
              <span className="inline-flex rounded-full bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1 text-[11px] md:text-xs uppercase tracking-[0.18em] font-medium">
                Submission Process
              </span>

              <h3 className="mt-4 text-2xl md:text-3xl font-serif text-gray-900 leading-tight">
                Share Your Story With Confidence
              </h3>

              <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed max-w-xl">
                We review every submission carefully and follow up with clear
                next steps, so you know exactly what to expect after sending
                your work.
              </p>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-[11px] uppercase tracking-[0.18em] text-blue-600 font-medium">
                  Step 1
                </p>
                <h4 className="mt-2 text-sm font-semibold text-gray-900">
                  Prepare File
                </h4>
                <p className="mt-1 text-xs text-gray-500 leading-relaxed">
                  PDF, DOC, or DOCX format up to 10MB.
                </p>
              </div>

              <div
                className={`rounded-2xl border p-4 transition ${
                  uploaded
                    ? "border-blue-200 bg-blue-50"
                    : "border-slate-200 bg-slate-50"
                }`}
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-blue-600 font-medium">
                  Step 2
                </p>
                <h4 className="mt-2 text-sm font-semibold text-gray-900">
                  Upload Manuscript
                </h4>
                <p className="mt-1 text-xs text-gray-500 leading-relaxed">
                  Add your file securely using the upload box below.
                </p>
              </div>

              <div
                className={`rounded-2xl border p-4 transition ${
                  uploaded
                    ? "border-blue-200 bg-blue-50"
                    : "border-slate-200 bg-slate-50"
                }`}
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-blue-600 font-medium">
                  Step 3
                </p>
                <h4 className="mt-2 text-sm font-semibold text-gray-900">
                  Editorial Review
                </h4>
                <p className="mt-1 text-xs text-gray-500 leading-relaxed">
                  Receive confirmation and next steps within 3–5 business days.
                </p>
              </div>
            </div>

            {/* Upload Box */}
            <label className="group flex flex-col items-center justify-center w-full rounded-[28px] border-2 border-dashed border-blue-300 bg-gradient-to-b from-blue-50/70 to-white px-6 py-10 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all duration-300">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xl shadow-sm">
                ↑
              </div>

              <p className="text-base md:text-lg font-semibold text-gray-900">
                Upload your manuscript
              </p>

              <p className="mt-2 text-sm text-blue-600 font-medium">
                Click to upload or drag and drop
              </p>

              <p className="mt-2 text-xs md:text-sm text-gray-500">
                Accepted formats: PDF, DOC, DOCX • Maximum size: 10MB
              </p>

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>

            {/* File Info */}
            {file && (
              <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-gray-900">{file.name}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    File added successfully and ready for submission.
                  </p>
                </div>

                <span className="inline-flex items-center rounded-full bg-green-100 text-green-700 px-3 py-1 text-xs font-medium w-fit">
                  ✓ Ready
                </span>
              </div>
            )}

            {/* Reassurance / What to expect */}
            <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-200 p-4 md:p-5">
              <p className="text-sm font-semibold text-gray-900">
                What happens after you submit?
              </p>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Our editorial team reviews your manuscript, checks fit and
                quality, and follows up by email with the next steps. If your
                submission moves forward, we’ll explain the review process
                clearly.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-6">
              <button
                onClick={handleSubmit}
                disabled={!uploaded}
                className={`w-full rounded-full py-4 text-sm md:text-base font-semibold transition-all duration-300 shadow-lg ${
                  uploaded
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-slate-200 text-slate-500 cursor-not-allowed"
                }`}
              >
                {uploaded ? "Submit for Review →" : "Upload Manuscript to Continue"}
              </button>

              <p className="text-xs text-gray-500 mt-3 text-center leading-relaxed">
                Secure and confidential submission • No commitment required •
                Response within 3–5 business days
              </p>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="absolute inset-0 rounded-[32px] bg-blue-200/30 blur-3xl" />

            <div className="relative overflow-hidden rounded-[32px] shadow-2xl">
              <Image
                src="/final.jpeg"
                alt="Author writing manuscript"
                width={700}
                height={820}
                className="w-full h-[420px] md:h-[560px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <p className="uppercase tracking-[0.22em] text-[11px] md:text-xs text-blue-200 font-medium">
                  Editorial Review
                </p>
                <h3 className="mt-3 text-2xl md:text-3xl font-serif leading-tight">
                  A Clear Path From Submission To Response
                </h3>
                <p className="mt-3 text-sm md:text-base text-white/85 max-w-md leading-relaxed">
                  We make the process transparent, supportive, and easy to
                  follow for both emerging and established authors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}