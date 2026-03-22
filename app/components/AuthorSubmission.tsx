"use client";

import { useState } from "react";
import Image from "next/image";

export default function AuthorSubmission() {
  const [file, setFile] = useState<File | null>(null);
  const [uploaded, setUploaded] = useState(false);

  const handleFileChange = (e: any) => {
    const selectedFile = e.target.files[0];

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
    <section className="py-28 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="uppercase tracking-widest text-sm text-blue-600 mb-3">
            Get Published
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Submit Your Manuscript
          </h2>

          <p className="text-gray-500 mt-4 text-sm md:text-base max-w-xl mx-auto">
            Take the first step toward becoming a published author with our platform
          </p>

          <div className="w-24 h-[3px] bg-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CARD */}
          <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-10 border border-gray-100">

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Share Your Story With The World
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Submit your manuscript and our editorial team will carefully review it.
              We’re always looking for fresh voices and powerful stories.
            </p>

            {/* Upload Box */}
            <label className="flex flex-col items-center justify-center w-full border-2 border-dashed border-blue-400 rounded-2xl p-10 cursor-pointer hover:bg-blue-50 transition-all duration-300 group">

              <span className="text-blue-600 font-semibold mb-2 group-hover:scale-105 transition">
                Click to upload or drag & drop
              </span>

              <span className="text-xs text-gray-500">
                PDF, DOC, DOCX (Max 10MB)
              </span>

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>

            {/* File Info */}
            {file && (
              <div className="mt-5 text-sm text-gray-700 bg-blue-50 px-4 py-3 rounded-lg border border-blue-100">
                Uploaded: <span className="font-medium">{file.name}</span>
              </div>
            )}

            {/* Submit Button */}
            {uploaded && (
              <button
                onClick={handleSubmit}
                className="mt-6 w-full bg-blue-600 text-white py-3 rounded-full font-medium hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
              >
                Submit Manuscript
              </button>
            )}
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-2xl"></div>

            <Image
              src="/final.jpeg"
              alt="Author Writing"
              width={600}
              height={700}
              className="relative rounded-3xl shadow-2xl object-cover w-full h-[420px] md:h-[520px] group-hover:scale-105 transition duration-700"
            />
          </div>

        </div>
      </div>
    </section>
  );
}