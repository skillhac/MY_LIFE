"use client";

import Image from "next/image";
import { Copy, Check, ChevronDown, ChevronUp, Download } from "lucide-react";
import { useState } from "react";

/* ---------------- COMPONENT ---------------- */

export default function DonationDetails() {
  const [toast, setToast] = useState<string | null>(null);
  const [showProofs, setShowProofs] = useState(false);

  /* ---------------- HELPERS ---------------- */

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 1800);
  };

  const copyToClipboard = (label: string, value: string) => {
    navigator.clipboard.writeText(value);
    showToast(`${label} copied`);
  };

  const downloadFile = (url: string, name: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  /* ---------------- UI PARTS ---------------- */

  const Row = ({ label, value }: { label: string; value: string }) => (
    <div
      onClick={() => copyToClipboard(label, value)}
      className="flex items-center justify-between gap-3 cursor-pointer rounded-md px-2 py-1 hover:bg-white/5 transition group"
    >
      <p className="text-sm">
        <span className="text-white/60">{label}:</span>{" "}
        <span className="font-semibold">{value}</span>
      </p>
      <Copy size={16} className="text-white/40 group-hover:text-[#00ff41]" />
    </div>
  );

  const ProofDocuments = () => (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-xl">
      <h3 className="text-lg font-semibold mb-4">Proof Documents</h3>

      <DocRow
        title="World Championship Invester Pitch "
        onDownload={() => downloadFile("/documents/proof.docx", "proof.docx")}
      />

      <DocRow
        title="Proof of Document"
        onDownload={() =>
          downloadFile("/documents/prooof of Doc.pdf", "prooof of Doc.pdf")
        }
      />

      <p className="text-xs text-white/50 mt-4">
        Documents shared for transparency and verification.
      </p>
    </div>
  );

  /* ---------------- RENDER ---------------- */

  return (
    <>
      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999]">
          <div className="flex items-center gap-2 bg-black/90 border border-[#00ff41]/40 px-4 py-2 rounded-full">
            <Check size={16} className="text-[#00ff41]" />
            <span className="text-sm">{toast}</span>
          </div>
        </div>
      )}

      {/* Layout */}
      <div className="min-h-dvh w-full flex items-center justify-center px-4">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT */}
          <div className="space-y-6">
            <div className="hidden lg:block">
              <ProofDocuments />
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setShowProofs(!showProofs)}
                className="w-full flex justify-between items-center bg-black/40 px-4 py-3 rounded-xl"
              >
                View Proof Documents
                {showProofs ? <ChevronUp /> : <ChevronDown />}
              </button>

              {showProofs && (
                <div className="mt-4">
                  <ProofDocuments />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const DocRow = ({
  title,
  onDownload,
}: {
  title: string;
  onDownload: () => void;
}) => (
  <div className="flex justify-between items-center bg-black/40 px-3 py-2 rounded-lg">
    <div>
      <p className="font-medium">{title}</p>
      <p className="text-xs text-white/50">Verified document</p>
    </div>
    <button
      onClick={onDownload}
      className="text-[#00ff41] text-xs flex items-center gap-1"
    >
      <Download size={14} />
      Download
    </button>
  </div>
);
