"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: "1",
    quote:
      "Exceptional work. Delivered our AI-powered SaaS platform ahead of schedule with clean, scalable code. Highly recommend.",
    author: "Thandiwe Okonkwo",
    role: "CEO, Nimbus Lattice",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "Transformed our workflow with Replit Agent automation. Saved us 20+ hours per week. A true AI automation specialist.",
    author: "Bjorn Halvorsen",
    role: "CTO, Quill & Circuit Labs",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "Professional, responsive, and technically brilliant. The Rork app he built is exactly what we needed. Will hire again.",
    author: "Cosmina Dragomir",
    role: "Founder, Meridian Byte Co.",
    rating: 5,
  },
  {
    id: "4",
    quote:
      "Our Base44 migration was risky on paper—he made it boringly smooth. Clear docs, zero drama, and the team actually understood the new stack.",
    author: "Leocadia Merritt",
    role: "VP Engineering, Harborline Systems",
    rating: 5,
  },
  {
    id: "5",
    quote:
      "We needed LangChain-style orchestration without the spaghetti. Architecture was tight, observability was there from day one, and latency dropped noticeably.",
    author: "Zephyrine Lowell",
    role: "Head of Product, Vesper Analytics",
    rating: 5,
  },
  {
    id: "6",
    quote:
      "Hired for a tight MVP window. Shipped Stripe + Supabase + OpenAI flows that passed our security review first pass. Rare find.",
    author: "Kwame Attah",
    role: "Co-founder, Kente Cloud",
    rating: 5,
  },
  {
    id: "7",
    quote:
      "Communicates like a partner, not a vendor. When scope shifted, he reframed options instead of padding estimates. The dashboard still gets compliments from investors.",
    author: "Isabeau Villeneuve",
    role: "COO, Lumen & Forge Studio",
    rating: 5,
  },
  {
    id: "8",
    quote:
      "Full-stack audit uncovered three silent bottlenecks. Two-week sprint later, our internal tools feel native-fast—and the team finally trusts the metrics pipeline.",
    author: "Torben Ahlstrand",
    role: "Principal Architect, Frostgrove Digital",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What Clients <span className="text-accent">Say</span>
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          Trusted by startups and enterprises for AI-powered solutions.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="glass glass-hover p-8 rounded-2xl relative"
          >
            <Quote
              className="absolute top-6 right-6 text-accent/20"
              size={40}
            />
            <div className="flex gap-1 mb-4">
              {Array.from({ length: testimonial.rating }).map((_, j) => (
                <Star
                  key={j}
                  className="text-amber-400 fill-amber-400"
                  size={18}
                />
              ))}
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              &quot;{testimonial.quote}&quot;
            </p>
            <div>
              <p className="font-semibold text-white">{testimonial.author}</p>
              <p className="text-sm text-white/50">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
