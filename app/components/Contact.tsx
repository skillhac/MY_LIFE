"use client";

import { Mail, Phone, MapPin, Instagram, Youtube } from "lucide-react";

export default function Contact() {
  return (
    <footer className="w-full bg-black border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Contact */}
        <div className="space-y-4">
          <h3 className="uppercase tracking-widest text-sm text-white/50">
            Contact
          </h3>

          <div className="flex items-start gap-3 text-sm">
            <Mail size={18} className="text-[#00ff41] mt-0.5" />
            <a
              href="mailto:skillhac@gmail.com"
              className="hover:text-[#00ff41] transition"
            >
              skillhac@gmail.com
            </a>
          </div>

          <div className="flex items-start gap-3 text-sm">
            <Phone size={18} className="text-[#00ff41] mt-0.5" />
            <a
              href="tel:+917907424988"
              className="hover:text-[#00ff41] transition"
            >
              +91 79074 24988
            </a>
          </div>
        </div>

        {/* Address */}
        <div className="space-y-4">
          <h3 className="uppercase tracking-widest text-sm text-white/50">
            Address
          </h3>

          <div className="flex items-start gap-3 text-sm leading-relaxed">
            <MapPin size={18} className="text-[#00ff41] mt-0.5" />
            <p className="text-white/80">
              Sandhya Bhavan
              <br />
              Moongode PO, Peyad
              <br />
              Thiruvananthapuram
              <br />
              Kerala – 695573
            </p>
          </div>
        </div>

        {/* Social */}
        <div className="space-y-4">
          <h3 className="uppercase tracking-widest text-sm text-white/50">
            Social
          </h3>

          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/skillhac?igsh=bWQwNHFlemlvNXF6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-[#00ff41] transition"
            >
              <Instagram size={18} />
              Instagram
            </a>

            <a
              href="https://youtu.be/pV9OerNwpdk?si=K011CO6QK7YhJAJN"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-[#00ff41] transition"
            >
              <Youtube size={18} />
              YouTube
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Syam Kumar S.S — All rights reserved
      </div>
    </footer>
  );
}
