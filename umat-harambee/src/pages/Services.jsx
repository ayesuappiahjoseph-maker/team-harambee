import React from "react";
import { SERVICES, EMERGENCY_CONTACTS } from "../data/services";

export default function Services() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 text-paper">
      <h1 className="text-3xl font-bold mb-3">Campus Services & Contacts</h1>
      <p className="text-slate dark:text-paper/70 mb-10 max-w-2xl">
        Important campus offices, student utilities, and emergency contact details at UMaT.
      </p>

      {/* Services Grid */}
      <div className="grid gap-6 sm:grid-cols-2 mb-12">
        {SERVICES.map((service) => (
          <div key={service.id} className="rounded-xl border border-yellow-500/20 bg-zinc-900/60 p-6 shadow-lg">
            <span className="text-xs uppercase tracking-wider text-yellow-500 font-semibold">
              {service.category}
            </span>
            <h2 className="text-xl font-bold text-white mt-1 mb-2">{service.name}</h2>
            <p className="text-zinc-400 text-sm mb-4">{service.notes}</p>
            <div className="text-xs text-zinc-300 space-y-1">
              <p>📞 {service.phone}</p>
              <p>✉️ {service.email}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Emergency Contacts Section */}
      <h2 className="text-2xl font-bold mb-4">Emergency Contacts</h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {EMERGENCY_CONTACTS.map((item, idx) => (
          <div key={idx} className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
            <h3 className="font-semibold text-white mb-1">{item.label}</h3>
            <p className="text-sm text-red-400">📞 {item.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}