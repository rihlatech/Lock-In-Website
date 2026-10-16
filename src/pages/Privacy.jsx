
import { Link } from "react-router-dom";

const sections = [
  ["controller", "1. Who Is Responsible"],
  ["information", "2. Information We Handle"],
  ["use", "3. How Information Is Used"],
  ["ai", "4. AI Features"],
  ["payments", "5. Payments"],
  ["sharing", "6. When Information Is Shared"],
  ["retention", "7. Data Retention"],
  ["security", "8. Security"],
  ["rights", "9. Your Choices and Rights"],
  ["children", "10. Children's Privacy"],
  ["changes", "11. Changes to This Policy"],
  ["contact", "12. Contact Us"],
];

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-[#25231F]/10 py-8 sm:py-10">
      <h2 className="font-display text-3xl font-normal tracking-tight sm:text-4xl">
        {title}
      </h2>
      <div className="mt-5 space-y-4 text-sm leading-7 text-[#625C53]">
        {children}
      </div>
    </section>
  );
}

function DraftNotice() {
  return (
    <div className="border border-[#8B714A]/30 bg-[#E9DFCE]/50 p-5">
      {/* <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8B714A]">
        Draft for review
      </p> */}
      {/* <p className="mt-2 text-sm leading-6 text-[#625C53]">
        This draft must be checked against the live app, its database,
        analytics, AI providers and payment provider before publication.
        Have a qualified Kenyan lawyer review it.
      </p> */}
    </div>
  );
}

export default function Privacy() {
  return (
    <main className="min-h-screen bg-[#F8F4ED] text-[#25231F]">
      <header className="border-b border-[#25231F]/10">
        <div className="mx-auto max-w-[1100px] px-5 py-16 sm:px-8 sm:py-24 lg:px-14">
          <p className="text-xs uppercase tracking-[0.22em] text-[#8B714A]">
            Lock-In / Legal
          </p>
          <h1 className="mt-5 font-display text-6xl font-light leading-[0.95] sm:text-7xl lg:text-8xl">
            Privacy
            <br />
            Policy.
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-[#625C53] sm:text-base">
            How Lock-In handles information when you use the planner,
            manage your account or use AI features.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-xs text-[#625C53]">
            <span>Effective date: [insert effective date]</span>
            <span>Last updated: [insert date]</span>
          </div>
          <div className="mt-8 max-w-2xl">
            <DraftNotice />
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1100px] gap-12 px-5 py-12 sm:px-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16 lg:px-14 lg:py-16">
        <aside className="self-start lg:sticky lg:top-8">
          <p className="text-xs uppercase tracking-[0.18em] text-[#8B714A]">
            On this page
          </p>
          <nav className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {sections.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-sm text-[#625C53] transition-colors hover:text-[#8B714A]"
              >
                {label}
              </a>
            ))}
          </nav>
          <Link
            to="/terms"
            className="mt-8 inline-block border-b border-[#8B714A] pb-1 text-sm text-[#8B714A]"
          >
            Read Terms &amp; Conditions →
          </Link>
        </aside>

        <article className="min-w-0">
          <p className="mb-8 text-sm leading-7 text-[#625C53]">
            This Privacy Policy describes the intended approach to personal
            information associated with Lock-In, a planning and productivity
            service operated by Sensation Marketing Agency. The final policy
            must match the Service's actual technical behaviour and comply
            with applicable Kenyan data protection law.
          </p>

          <Section id="controller" title="1. Who Is Responsible">
            <p>
              Lock-In is operated by Sensation Marketing Agency. For
              questions about this policy or personal information, contact
              sensationmagency@gmail.com or +254 797 983216.
            </p>
            <p>
              Business address: [insert confirmed business address].
              Any required data-controller registration details or privacy
              contact details must be confirmed before publication.
            </p>
          </Section>

          <Section id="information" title="2. Information We Handle">
            <p>Depending on the features you use, Lock-In may process:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-[#25231F]">Account information:</strong>{" "}
                name, email address, country, account identifiers and
                authentication-related information.
              </li>
              <li>
                <strong className="text-[#25231F]">Planner content:</strong>{" "}
                goals, tasks, schedules, notes, vision-board entries,
                reviews and preferences you choose to save.
              </li>
              <li>
                <strong className="text-[#25231F]">AI interactions:</strong>{" "}
                prompts, messages and responses needed to provide AI features.
                The final policy must identify which interaction records are
                stored and for how long.
              </li>
              <li>
                <strong className="text-[#25231F]">Subscription information:</strong>{" "}
                plan, subscription status, transaction references, payment
                status and records needed to manage purchases. Payment
                credentials handled by a payment provider may be subject to
                that provider's own privacy terms.
              </li>
              <li>
                <strong className="text-[#25231F]">Technical information:</strong>{" "}
                information such as logs, device or browser details, and
                diagnostics, if the live Service collects them.
              </li>
            </ul>
            <p>
              The exact fields collected, including analytics, cookies,
              crash reports and usage logs, must be verified against the
              production app and its service providers.
            </p>
          </Section>

          <Section id="use" title="3. How Information Is Used">
            <p>Information may be used to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Create and maintain your account.</li>
              <li>Save and display your planning information.</li>
              <li>Provide reminders and requested app features.</li>
              <li>Operate subscriptions, verify payments and manage refunds.</li>
              <li>Provide AI features you choose to use.</li>
              <li>Protect the Service, investigate abuse and troubleshoot errors.</li>
              <li>Respond to support requests and meet legal obligations.</li>
            </ul>
            <p>
              The final policy should specify the applicable legal bases for
              processing and any optional analytics or marketing uses. We
              should not claim that information is never viewed or processed
              unless the system design and actual access arrangements support
              that statement.
            </p>
          </Section>

          <Section id="ai" title="4. AI Features">
            <p>
              If you use Lock-In AI, information you provide may be processed
              by the AI service provider to generate replies, summaries,
              suggestions or voice interactions.
            </p>
            <p>
              Do not enter passwords, payment credentials or sensitive
              information that is not needed for your planning task.
              AI-generated content can be inaccurate.
            </p>
            <p>
              Before publication, identify the AI providers used, the
              information sent to each provider, applicable provider
              retention and training settings, processing locations,
              and any cross-border transfers.
            </p>
            <p>
              Voice processing and storage must be described according to
              the live implementation. Do not assume that audio is never
              stored until this has been verified.
            </p>
            <p>
              Where a feature requires permission, the app should explain
              what is enabled and provide a way to withdraw that permission
              where applicable.
            </p>
          </Section>

          <Section id="payments" title="5. Payments">
            <p>
              Lock-In offers paid subscription plans. Payments will be
              handled through the payment provider presented at checkout.
            </p>
            <p>
              We may receive payment confirmations, transaction references,
              amounts, timestamps and subscription status to administer your
              plan and resolve payment issues.
            </p>
            <p>
              The final policy must name the actual payment provider and
              describe the payment information it receives, the information
              Lock-In receives in return, and the applicable retention
              periods.
            </p>
          </Section>

          <Section id="sharing" title="6. When Information Is Shared">
            <p>
              Information may be processed by service providers needed to
              operate Lock-In, such as hosting, database, authentication,
              email, payment and AI providers, to the extent those providers
              are actually used.
            </p>
            <p>
              Information may also be disclosed when required by law or
              where necessary to protect the rights, safety and security
              of users or the Service.
            </p>
            <p>
              Before publication, list the actual providers, explain their
              roles, and confirm whether information is transferred outside
              Kenya and what safeguards apply. Do not publish an assumed
              provider list.
            </p>
          </Section>

          <Section id="retention" title="7. Data Retention">
            <p>
              Information should be retained only for as long as necessary
              for the purposes for which it was collected, including
              providing the Service, maintaining required records, resolving
              disputes and meeting legal obligations.
            </p>
            <p>
              Retention periods for account records, planner content, AI
              messages, payment records, backups and technical logs must
              be confirmed before publication.
            </p>
            <p>
              You may request account deletion. Explain the actual deletion
              process, what is deleted, what may remain in backups and what
              must be retained by law once the production process has been
              verified.
            </p>
          </Section>

          <Section id="security" title="8. Security">
            <p>
              We aim to use appropriate safeguards to protect personal
              information against unauthorised access, loss, alteration
              or disclosure.
            </p>
            <p>
              No online service can guarantee absolute security. If you
              believe your account has been compromised, contact us promptly.
            </p>
            <p>
              The final policy should describe the safeguards actually
              implemented and the process for handling personal data
              breaches, without making unsupported security guarantees.
            </p>
          </Section>

          <Section id="rights" title="9. Your Choices and Rights">
            <p>
              Depending on applicable law and the circumstances, you may
              have rights to request access to, correction of, deletion of
              or other action concerning your personal information, and to
              object to or restrict certain processing.
            </p>
            <p>
              You may manage available account, reminder and AI permissions
              through the app settings. You may also contact us to make a
              privacy request or ask a question.
            </p>
            <p>
              Email{" "}
              <a
                href="mailto:sensationmagency@gmail.com"
                className="text-[#8B714A] underline underline-offset-4"
              >
                sensationmagency@gmail.com
              </a>{" "}
              or call/WhatsApp{" "}
              <a
                href="https://wa.me/254797983216"
                className="text-[#8B714A] underline underline-offset-4"
              >
                +254 797 983216
              </a>.
            </p>
            <p>
              We may need to verify your identity before acting on a request.
              Applicable law may permit certain information to be retained
              or limit a requested action.
            </p>
          </Section>

          <Section id="children" title="10. Children's Privacy">
            <p>
              Lock-In is intended for users aged 18 and over, subject to
              confirmation of the final eligibility rules. We do not
              knowingly intend to collect personal information from children
              in violation of applicable law.
            </p>
            <p>
              If you believe a child has provided personal information
              contrary to the applicable rules, contact us so the matter
              can be reviewed.
            </p>
          </Section>

          <Section id="changes" title="11. Changes to This Policy">
            <p>
              We may update this policy when our practices or legal
              obligations change. Material changes will be communicated
              through the Service or by email where appropriate or required
              by law.
            </p>
            <p>
              The effective date at the top of this page indicates when
              the current version applies.
            </p>
          </Section>

          <Section id="contact" title="12. Contact Us">
            <div className="border border-[#25231F]/10 p-5">
              <p><strong className="text-[#25231F]">Lock-In</strong></p>
              <p>Operator: Sensation Marketing Agency</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:sensationmagency@gmail.com"
                  className="text-[#8B714A] underline underline-offset-4"
                >
                  sensationmagency@gmail.com
                </a>
              </p>
              <p>
                Phone / WhatsApp:{" "}
                <a
                  href="https://wa.me/254797983216"
                  className="text-[#8B714A] underline underline-offset-4"
                >
                  +254 797 983216
                </a>
              </p>
              <p>Business address: [insert confirmed business address].</p>
            </div>
          </Section>

          <div className="border-t border-[#25231F]/10 pt-8">
            <DraftNotice />
            <p className="mt-6 text-sm text-[#625C53]">
              Read our <Link to="/terms" className="text-[#8B714A] underline underline-offset-4">Terms &amp; Conditions</Link>.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
