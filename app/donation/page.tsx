"use client";

import Image from "next/image";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

export default function DonationDetails() {
  const details = {
    accountName: "Syam Kumar S.S",
    accountNumber: "67172487056",
    ifsc: "SBIN0070040",
    branchCode: "70040",
    bank: "SBI kattakada",
    upiId: "skss2000r@okhdfcbank",
  };

  const [toast, setToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 1800);
  };

  const copyToClipboard = (label: string, value: string) => {
    navigator.clipboard.writeText(value);
    showToast(`${label} copied`);
  };

  const Row = ({ label, value }: { label: string; value: string }) => (
    <div
      onClick={() => copyToClipboard(label, value)}
      className="flex items-center justify-between gap-3 cursor-pointer rounded-md px-2 py-1 hover:bg-white/5 transition group"
      title="Click to copy"
    >
      <p className="text-sm">
        <span className="text-white/60">{label}:</span>{" "}
        <span className="font-semibold">{value}</span>
      </p>

      <Copy
        size={16}
        className="text-white/40 group-hover:text-[#00ff41] transition"
      />
    </div>
  );

  return (
    <>
      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999]">
          <div className="flex items-center gap-2 bg-black/90 border border-[#00ff41]/40 text-white px-4 py-2 rounded-full shadow-lg animate-fade-in">
            <Check size={16} className="text-[#00ff41]" />
            <span className="text-sm font-medium">{toast}</span>
          </div>
        </div>
      )}

      <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-6 text-white space-y-6">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center">Bank & UPI Details</h2>

        {/* Bank Details */}
        <div className="space-y-1">
          <Row label="Account Name" value={details.accountName} />
          <Row label="Account Number" value={details.accountNumber} />
          <Row label="IFSC" value={details.ifsc} />
          <Row label="Branch Code" value={details.branchCode} />
          <Row label="Bank" value={details.bank} />
        </div>

        {/* UPI */}
        <div
          onClick={() => copyToClipboard("UPI ID", details.upiId)}
          className="flex items-center justify-between bg-black/40 rounded-lg px-4 py-3 cursor-pointer hover:bg-white/5 transition group"
        >
          <span className="font-medium">{details.upiId}</span>
          <Copy
            size={18}
            className="text-[#00ff41] group-hover:scale-110 transition"
          />
        </div>

        {/* QR Code */}
        <div className="flex flex-col items-center gap-3">
          <div
            onClick={() => copyToClipboard("UPI ID", details.upiId)}
            className="bg-white p-3 rounded-xl cursor-pointer hover:scale-105 transition"
          >
            <Image
              src="/GooglePay_QR.png"
              alt="UPI QR Code"
              width={180}
              height={180}
            />
          </div>
          <p className="text-white/60 text-sm">
            Scan with any UPI app or tap to copy
          </p>
        </div>
      </div>
    </>
  );
}
