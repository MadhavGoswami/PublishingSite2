"use client";

import { useState } from "react";

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
    <section className="py-24 bg-gradient-to-r from-[#f8f6f2] to-[#f1ede7]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Share Your Story With The World
          </h2>

          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Submit your manuscript and take the first step toward becoming a published author. 
            Our editorial team reviews every submission carefully.
          </p>

          {/* Upload Input */}
          <label className="block mb-4">
            <span className="sr-only">Choose file</span>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-600
                file:mr-4 file:py-3 file:px-6
                file:rounded-full file:border-0
                file:text-sm file:font-medium
                file:bg-[#c5a47e] file:text-white
                hover:file:scale-105 transition cursor-pointer"
            />
          </label>

          {/* File Name */}
          {file && (
            <p className="text-sm text-gray-700 mb-4">
              Uploaded: <span className="font-medium">{file.name}</span>
            </p>
          )}

          {/* Submit Button (Only After Upload) */}
          {uploaded && (
            <button
              onClick={handleSubmit}
              className="bg-black text-white px-8 py-3 rounded-full text-lg font-medium hover:scale-105 transition"
            >
              Submit Manuscript
            </button>
          )}
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl">
          <img
            src="/submission.jpg"
            alt="Author Writing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-md max-w-xs">
            <p className="text-sm text-gray-700">
              “Your story deserves to be heard. Start your publishing journey today.”
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}