import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact — TAGA",
  description: "Get in touch with the Texas America Golf Association.",
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-fairway-950">
        <Section className="text-center">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-300">
              Get In Touch
            </p>
            <h1 className="font-display mx-auto mt-3 max-w-2xl text-balance text-4xl font-semibold text-fairway-50 sm:text-5xl">
              Contact TAGA
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-fairway-200">
              Questions about membership, tournaments, or payments? Send us
              a message and someone from the Executive Committee will get
              back to you.
            </p>
          </FadeIn>
        </Section>
      </div>

      <Section>
        <FadeIn>
          <div className="mx-auto max-w-xl">
            <ContactForm />
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
