'use client'

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Globe, ArrowRight, ShieldCheck, FileText } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400 font-sans border-t border-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* BRAND COLUMN (Left Side) */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-extrabold tracking-wider bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
                Wanderlust.
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
              Wanderlust is your ultimate travel booking companion. We craft unforgettable journeys, seamless hotel bookings, and curated destination experiences worldwide. Explore the world with confidence and lifetime memories.
            </p>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-4 pt-2">
              {['facebook', 'instagram', 'twitter', 'linkedin'].map((social) => (
                <a 
                  key={social} 
                  href={`#${social}`} 
                  className="w-9 h-9 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-all duration-300 group"
                  aria-label={social}
                >
                  <span className="text-xs font-semibold capitalize group-hover:scale-105 transition-transform">
                    {social[0]}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS COLUMN */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-base tracking-wide uppercase">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Home', href: '/' },
                { label: 'Destinations', href: '/all' },
                { label: 'Add Destination', href: '/destination' },
                { label: 'My Bookings', href: '/my-booking' }
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-orange-500 transition-colors duration-200 flex items-center gap-1 group">
                    <span className="w-0 overflow-hidden group-hover:w-2 transition-all duration-200 text-orange-500">&middot;</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO COLUMN */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-base tracking-wide uppercase">Contact Us</h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-orange-500 shrink-0 mt-0.5" />
                <span>123 Travel Avenue, Suite 450, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-orange-500 shrink-0" />
                <a href="tel:+88012345678" className="hover:text-white transition-colors">+880 1234-567890</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-orange-500 shrink-0" />
                <a href="mailto:support@wanderlust.com" className="hover:text-white transition-colors">support@wanderlust.com</a>
              </li>
            </ul>
          </div>

          {/* NEWSLETTER COLUMN (Gorgeous Interactive Field) */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-base tracking-wide uppercase">Newsletter</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <form className="relative flex items-center mt-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors pr-12"
                required
              />
              <button 
                type="submit" 
                className="absolute right-1.5 p-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight size={16} />
              </button>
            </form>
          </div>

        </div>

        {/* BOTTOM BAR (Terms & Conditions & Copyright) */}
        <div className="border-t border-gray-900 pt-8 mt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium">
          
          {/* Copyright text */}
          <div className="text-gray-500 text-center md:text-left order-2 md:order-1">
            &copy; {currentYear} <span className="text-gray-400 font-semibold">Wanderlust.</span> All rights reserved. Developed with passion.
          </div>

          {/* Terms & Conditions (Requested Feature) */}
          <div className="flex flex-wrap items-center justify-center gap-6 order-1 md:order-2 text-gray-500">
            <Link href="/terms" className="hover:text-orange-500 transition-colors flex items-center gap-1.5">
              <FileText size={14} className="text-gray-600" /> Terms & Conditions
            </Link>
            <span className="text-gray-800 hidden sm:inline">|</span>
            <Link href="/privacy" className="hover:text-orange-500 transition-colors flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-gray-600" /> Privacy Policy
            </Link>
            <span className="text-gray-800 hidden sm:inline">|</span>
            <Link href="/cookies" className="hover:text-orange-500 transition-colors flex items-center gap-1.5">
              <Globe size={14} className="text-gray-600" /> Cookie Policy
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;