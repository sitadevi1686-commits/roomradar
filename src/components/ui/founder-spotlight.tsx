"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./badge";
import { Button } from "./button";
import { ShieldCheck, Mail, MapPin, Award } from "lucide-react";
import founderAvatar from "@/assets/images/agent/img_01.jpg";

export const FounderSpotlight: React.FC = () => {
  return (
    <div className="my-16 mx-auto max-w-5xl px-4">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0D1A1C] via-[#13272A] to-[#0A1416] p-8 md:p-12 text-white shadow-2xl border border-emerald-500/20">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          <div className="md:col-span-5 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 opacity-40 blur transition duration-300 group-hover:opacity-75" />
              <div className="relative h-64 w-64 md:h-72 md:w-72 overflow-hidden rounded-2xl border-2 border-emerald-400/30 bg-gray-900 shadow-xl">
                <Image
                  src={founderAvatar}
                  alt="Harmanpreet Singh - Founder & CEO"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="absolute -bottom-3 -right-3 rounded-xl bg-emerald-500 p-2 text-white shadow-lg">
                <ShieldCheck className="h-6 w-6" />
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="success" className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                <Award className="h-3.5 w-3.5 mr-1" /> Verified Ownership
              </Badge>
              <span className="text-xs text-gray-400 flex items-center">
                <MapPin className="h-3 w-3 mr-1 text-emerald-400" /> Room Radar HQ
              </span>
            </div>

            <div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Harmanpreet Singh
              </h3>
              <p className="text-emerald-400 font-medium text-lg mt-1">
                Founder & Chief Executive Officer
              </p>
            </div>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Leading the innovation and product vision behind <strong>Room Radar</strong>. Transforming modern property acquisition, luxury rentals, and agent tools with cutting-edge real estate technology and verified listings.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 border-t border-white/10">
              <div>
                <p className="text-2xl font-bold text-white">745K+</p>
                <p className="text-xs text-gray-400">Curated Listings</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">99.8%</p>
                <p className="text-xs text-gray-400">Verified Accuracy</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-2xl font-bold text-white">35+</p>
                <p className="text-xs text-gray-400">Smart Filters</p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link href="mailto:contact@roomradar.com">
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium flex items-center gap-2">
                  <Mail className="h-4 w-4" /> Contact Executive Office
                </Button>
              </Link>
              <Link href="/about_us_02">
                <Button variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10">
                  Read Company Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
