import type { Metadata } from "next";
import Testimonials from "@/components/sections/Testimonials";

export const metadata: Metadata = {
  title: "Testimonials | Full Stack AI Developer",
  description: "What clients and collaborators say about working together.",
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen">
      <Testimonials />
    </main>
  );
}
