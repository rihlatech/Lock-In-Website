
export default function Contact() {
  const email = "sensationmagency@gmail.com";
  const phone = "+254 797 983216";
  const whatsappNumber = "254797983216";

  return (
    <main className="min-h-[70vh] bg-[#F8F4ED] text-[#25231F]">
      {/* Hero */}
      <section className="px-5 pb-20 pt-24 sm:px-8 sm:pb-28 sm:pt-32 lg:px-14">
        <p className="text-xs uppercase tracking-[0.22em] text-[#8B714A]">
          Get in touch
        </p>

        <h1 className="font-display mt-6 text-7xl font-light leading-[0.95] sm:text-8xl lg:text-[9rem]">
          Let's connect.
        </h1>

        <div className="mt-9 grid gap-8 border-t border-[#D9D0C1] pt-7 md:grid-cols-[1fr_2fr] md:gap-16">
          <p className="text-xs uppercase tracking-[0.18em] text-[#8B714A]">
            We're here to listen
          </p>

          <p className="max-w-2xl text-sm leading-8 text-[#625C53] sm:text-base">
            Have a question about Lock-In, its upcoming release, or your
            subscription? Reach out using one of the contact options below.
            We're happy to hear from you.
          </p>
        </div>
      </section>

      {/* Contact options */}
      <section className="px-5 pb-24 sm:px-8 lg:px-14">
        <div className="grid border-t border-[#D9D0C1] md:grid-cols-2">
          <article className="border-b border-[#D9D0C1] py-9 md:border-b-0 md:border-r md:py-12 md:pr-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#8B714A]">
              Email
            </p>

            <h2 className="font-display mt-5 text-4xl font-light sm:text-5xl">
              Write to us.
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-[#625C53]">
              For general enquiries, support questions, and anything else
              you'd like us to know.
            </p>

            <a
              href={`mailto:${email}`}
              className="mt-8 inline-flex items-center gap-3 border-b border-[#8B714A] pb-2 text-sm transition-colors hover:text-[#8B714A]"
            >
              {email} <span aria-hidden="true">↗</span>
            </a>
          </article>

          <article className="border-b border-[#D9D0C1] py-9 md:border-b-0 md:py-12 md:pl-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#8B714A]">
              WhatsApp
            </p>

            <h2 className="font-display mt-5 text-4xl font-light sm:text-5xl">
              Let's talk.
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-[#625C53]">
              Prefer a direct conversation? Contact the team on WhatsApp.
            </p>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 border-b border-[#8B714A] pb-2 text-sm transition-colors hover:text-[#8B714A]"
            >
              {phone} <span aria-hidden="true">↗</span>
            </a>
          </article>
        </div>
      </section>

      {/* Closing note */}
      <section className="bg-[#25231F] px-5 py-16 text-[#F8F4ED] sm:px-8 sm:py-20 lg:px-14">
        <p className="text-xs uppercase tracking-[0.22em] text-[#C9A875]">
          Lock-In
        </p>

        <h2 className="font-display mt-5 max-w-3xl text-5xl font-light leading-tight sm:text-7xl">
          Make room for what matters.
        </h2>

        <p className="mt-5 max-w-xl text-sm leading-7 text-[#D0C9BE]">
          We're preparing for our first public release. Thanks for being part
          of the journey.
        </p>
      </section>
    </main>
  );
}
