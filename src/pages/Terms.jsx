
import { Link } from "react-router-dom";

const sections = [
  ["who-we-are", "1. Who We Are"],
  ["account", "2. Eligibility and Your Account"],
  ["service", "3. What Lock-In Offers"],
  ["plans", "4. Plans, Prices and Payment"],
  ["refunds", "5. Refunds and Cancellation"],
  ["ai", "6. Lock-In AI"],
  ["acceptable-use", "7. Acceptable Use"],
  ["content", "8. Your Content"],
  ["intellectual-property", "9. Our Intellectual Property"],
  ["affiliates", "10. Affiliate Programme"],
  ["availability", "11. Availability and Changes"],
  ["disclaimers", "12. Disclaimers"],
  ["liability", "13. Limitation of Liability"],
  ["termination", "14. Suspension and Termination"],
  ["privacy", "15. Privacy"],
  ["law", "16. Governing Law and Disputes"],
  ["changes", "17. Changes to These Terms"],
  ["general", "18. General"],
  ["contact", "19. Contact Us"],
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
      </p>
      <p className="mt-2 text-sm leading-6 text-[#625C53]">
        This document is a draft and has not been approved for publication.
        Please confirm all outstanding details and have a qualified Kenyan
        lawyer review it before publishing.
      </p> */}
    </div>
  );
}

export default function Terms() {
  return (
    <main className="min-h-screen bg-[#F8F4ED] text-[#25231F]">
      <header className="border-b border-[#25231F]/10">
        <div className="mx-auto max-w-[1100px] px-5 py-16 sm:px-8 sm:py-24 lg:px-14">
          <p className="text-xs uppercase tracking-[0.22em] text-[#8B714A]">
            Lock-In / Legal
          </p>
          <h1 className="mt-5 font-display text-6xl font-light leading-[0.95] sm:text-7xl lg:text-8xl">
            Terms &amp;
            <br />
            Conditions.
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-[#625C53] sm:text-base">
            The terms that apply when you use Lock-In, manage your plans,
            subscribe to a plan or use Lock-In AI.
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
            to="/privacy"
            className="mt-8 inline-block border-b border-[#8B714A] pb-1 text-sm text-[#8B714A]"
          >
            Read our Privacy Policy →
          </Link>
        </aside>

        <article className="min-w-0">
          <p className="mb-8 text-sm leading-7 text-[#625C53]">
            These Terms and Conditions (“Terms”) govern your use of the
            Lock-In application, website and related services (“Service”).
            By creating an account, subscribing to a plan or using the
            Service, you agree to these Terms. Please read them carefully.
          </p>

          <Section id="who-we-are" title="1. Who We Are">
            <p>
              Lock-In is a productivity and planning service operated by
              Sensation Marketing Agency (“Lock-In”, “we”, “us” or “our”).
            </p>
            <p>
              Registered business name and registration number: [confirm and
              insert if applicable].
            </p>
            <p>Business address: [insert confirmed business address].</p>
          </Section>

          <Section id="account" title="2. Eligibility and Your Account">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                You must be at least 18 years old to use the Service.
                [Confirm whether a parent or guardian consent arrangement
                will be permitted for younger users.]
              </li>
              <li>
                You must provide accurate account information, including
                your name, email address and country.
              </li>
              <li>
                You are responsible for activity under your account and for
                keeping your login details secure. Notify us promptly if you
                suspect unauthorised access.
              </li>
              <li>
                Each account is intended for one individual. Do not share,
                sell or transfer your account.
              </li>
            </ul>
          </Section>

          <Section id="service" title="3. What Lock-In Offers">
            <p>Features depend on your subscription plan.</p>
            <p>
              <strong className="text-[#25231F]">Basic:</strong> quarterly
              vision and goals, monthly planning, weekly planners, notes
              and monthly reviews.
            </p>
            <p>
              <strong className="text-[#25231F]">Premium:</strong> everything
              in Basic, plus Lock-In AI features, including AI chat, AI voice
              and permitted check-ins.
            </p>
            <p>
              Both plans are intended to include email reminders. You can
              manage reminder preferences in the app where those controls
              are available.
            </p>
            <p>
              We may add, change or remove features. If a material change
              reduces a paid feature, we will communicate the change where
              reasonably possible and handle affected subscriptions in
              accordance with these Terms and applicable law.
            </p>
          </Section>

          <Section id="plans" title="4. Plans, Prices and Payment">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[300px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-[#25231F]/15">
                    <th className="py-3 pr-4 font-medium text-[#25231F]">Plan</th>
                    <th className="py-3 pr-4 font-medium text-[#25231F]">Price</th>
                    <th className="py-3 font-medium text-[#25231F]">Includes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#25231F]/10">
                    <td className="py-4 pr-4">Basic</td>
                    <td className="py-4 pr-4 whitespace-nowrap">KSh 300/month</td>
                    <td className="py-4">Core planning, without AI chat or voice.</td>
                  </tr>
                  <tr className="border-b border-[#25231F]/10">
                    <td className="py-4 pr-4">Premium</td>
                    <td className="py-4 pr-4 whitespace-nowrap">KSh 400/month</td>
                    <td className="py-4">Core planning plus limited AI chat, voice and check-ins.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Subscriptions are billed monthly and are intended to renew
                automatically unless cancelled before the next renewal.
              </li>
              <li>
                Payments will be processed using the payment methods made
                available at checkout. The payment provider and available
                methods will be identified during checkout.
              </li>
              <li>
                You must be authorised to use the payment method you provide.
              </li>
              <li>
                Tax treatment and whether displayed prices include applicable
                taxes must be confirmed before publication.
              </li>
              <li>
                If payment fails, access to paid features may be paused after
                the applicable grace period. The grace period and renewal
                handling must be confirmed against the live service.
              </li>
              <li>
                We will provide at least 30 days' notice of price changes
                before they apply to a subsequent renewal, subject to
                applicable law.
              </li>
            </ul>
          </Section>

          <Section id="refunds" title="5. Refunds and Cancellation">
            <p>
              You may cancel your subscription at any time. Unless your
              account is terminated for another permitted reason, cancelling
              stops future renewals and your paid access continues until
              the end of the period already paid for.
            </p>
            <p>
              You may request a refund within seven days of the relevant
              subscription payment. After that seven-day period, subscription
              payments are generally non-refundable, except where a refund
              is required by applicable law or otherwise approved under our
              published policy.
            </p>
            <p>
              To request a refund or ask about cancellation, contact
              sensationmagency@gmail.com and include the account email,
              payment date and relevant payment reference. Do not send
              passwords or full payment-card details.
            </p>
            <p>
              Approved refunds will be handled through the original payment
              method where supported, subject to the payment provider's
              processing times and applicable law.
            </p>
            <p>
              Cancelling a subscription does not automatically delete your
              account or planner content. Account deletion is a separate
              action, subject to the data handling described in our{" "}
              <Link to="/privacy" className="text-[#8B714A] underline underline-offset-4">
                Privacy Policy
              </Link>.
            </p>
            <p>
              These terms do not remove any consumer rights that cannot
              lawfully be excluded or limited under Kenyan law.
            </p>
          </Section>

          <Section id="ai" title="6. Lock-In AI">
            <p>
              Lock-In AI offers productivity support, which may include
              summaries, outlines, suggestions and planning assistance.
              It is not medical, psychological, legal, financial or other
              professional advice.
            </p>
            <p>
              AI responses may be inaccurate, incomplete or outdated.
              Review important information and use your own judgement
              before acting on it.
            </p>
            <p>
              AI check-ins or other permission-dependent features will
              operate only as enabled by your settings and permissions.
              You can withdraw permission using the available controls.
            </p>
            <p>
              Premium AI access is subject to usage limits, available
              capacity and any limits displayed in the app. Exact message,
              voice and other usage allowances should be checked in the
              live plan description before publication.
            </p>
            <p>
              AI features may occasionally be unavailable or interrupted.
            </p>
          </Section>

          <Section id="acceptable-use" title="7. Acceptable Use">
            <p>You agree not to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Use Lock-In for unlawful purposes or to harm others.</li>
              <li>
                Hack, probe, scrape, disrupt or reverse engineer the Service
                except where applicable law permits such activity.
              </li>
              <li>Upload malware or attempt to compromise our systems.</li>
              <li>
                Use AI features to generate unlawful, abusive or harassing
                content or to evade applicable usage limits.
              </li>
              <li>
                Share, sell or transfer your account, impersonate another
                person or misrepresent your identity.
              </li>
              <li>Interfere with another person's use of the Service.</li>
            </ul>
            <p>
              We may restrict, suspend or terminate accounts for serious
              or repeated violations, subject to applicable law.
            </p>
          </Section>

          <Section id="content" title="8. Your Content">
            <p>
              Subject to any rights held by others, you retain your rights
              in the goals, tasks, notes, vision-board entries and other
              content you create in Lock-In.
            </p>
            <p>
              You are responsible for the content you submit and should
              avoid entering information you do not want processed by the
              Service or its enabled providers.
            </p>
            <p>
              We do not claim ownership of your personal planner content.
              However, the absolute statement that we never access or process
              content should not be relied upon until the app's actual
              technical operation, support access and AI processing have
              been verified. See the Privacy Policy for the intended data
              handling disclosures.
            </p>
          </Section>

          <Section id="intellectual-property" title="9. Our Intellectual Property">
            <p>
              The Lock-In name, branding, software, visual design and
              materials we create belong to their respective owners or
              licensors.
            </p>
            <p>
              While your account is in good standing, we grant you a
              personal, limited, non-exclusive, non-transferable and
              revocable right to use the Service for your own planning,
              subject to these Terms.
            </p>
            <p>
              These Terms do not transfer ownership of our intellectual
              property to you.
            </p>
          </Section>

          <Section id="affiliates" title="10. Affiliate Programme">
            <p>
              The affiliate programme is subject to approval and any
              additional programme rules communicated to participants.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Applicants must pass our review before receiving a referral
                code or link. We may request information relevant to
                eligibility and may decline or remove participants for
                legitimate programme or compliance reasons.
              </li>
              <li>
                Approved affiliates earn 15% of each eligible subscription
                payment made by a user they referred, for that user's first
                three monthly payments. At the current prices, this is
                KSh 45 per Basic payment or KSh 60 per Premium payment.
              </li>
              <li>
                Commission is earned only after the payment clears and the
                seven-day refund request window has passed.
              </li>
              <li>
                Commissions relating to refunded, reversed, charged-back
                or fraudulent transactions may be cancelled. Amounts already
                paid may be offset against future commissions where lawful.
              </li>
              <li>
                Payout method: M-Pesa, subject to verification of payout
                details. Payout schedule and minimum payout amount must be
                confirmed before the programme launches.
              </li>
              <li>
                Self-referrals, fake accounts and non-genuine sign-ups are
                prohibited.
              </li>
              <li>
                Affiliates must not spam, mislead users or promote features
                that are not available.
              </li>
              <li>
                Affiliates are independent promoters, not our employees
                or agents, and are responsible for their own tax obligations.
              </li>
              <li>
                We may change commission rates for future referrals with
                at least 30 days' notice. We may suspend or end participation
                for violations of these Terms or the affiliate rules.
              </li>
            </ul>
          </Section>

          <Section id="availability" title="11. Availability and Changes">
            <p>
              We aim to keep Lock-In available, but cannot guarantee that
              it will always be uninterrupted, secure or error-free.
            </p>
            <p>
              We may perform maintenance, update features or suspend parts
              of the Service. We will give reasonable notice of significant
              changes where practicable and comply with applicable law.
            </p>
          </Section>

          <Section id="disclaimers" title="12. Disclaimers">
            <p>
              To the extent permitted by applicable law, the Service is
              provided on an “as available” basis. Lock-In is a planning
              tool and we do not guarantee that it will produce a particular
              outcome, such as achieving a goal or increasing productivity.
            </p>
            <p>
              Nothing in this section limits any guarantee, right or remedy
              that cannot lawfully be excluded.
            </p>
          </Section>

          <Section id="liability" title="13. Limitation of Liability">
            <p>
              To the extent permitted by Kenyan law, we are not liable for
              indirect or consequential loss arising from use of the Service.
            </p>
            <p>
              Any limitation of liability for loss of data, profits,
              opportunity or other losses, and any monetary cap on our total
              liability, must be interpreted subject to applicable law and
              consumer rights.
            </p>
            <p>
              Proposed liability cap: [confirm whether the cap is based on
              payments made in the preceding three or twelve months and
              have it reviewed by a Kenyan lawyer].
            </p>
            <p>
              Nothing in these Terms excludes or limits liability that
              cannot legally be excluded or limited, or rights available
              to consumers under applicable Kenyan law.
            </p>
          </Section>

          <Section id="termination" title="14. Suspension and Termination">
            <p>
              You may stop using Lock-In and request account deletion through
              the available account controls or by contacting us.
            </p>
            <p>
              We may restrict or terminate access for material breach of
              these Terms, fraud, non-payment or legal reasons. We will
              provide notice where reasonable and legally required.
            </p>
            <p>
              When access ends, your permission to use the Service ends.
              Provisions intended to continue, including intellectual
              property, liability, disputes and governing law, will survive
              to the extent applicable.
            </p>
          </Section>

          <Section id="privacy" title="15. Privacy">
            <p>
              Our{" "}
              <Link to="/privacy" className="text-[#8B714A] underline underline-offset-4">
                Privacy Policy
              </Link>{" "}
              explains how personal data is handled and forms part of these
              Terms.
            </p>
          </Section>

          <Section id="law" title="16. Governing Law and Disputes">
            <p>
              These Terms are governed by the laws of Kenya.
            </p>
            <p>
              If you have a concern, contact us first at
              sensationmagency@gmail.com so we can try to resolve it.
              This does not prevent you from exercising any legal rights
              or pursuing remedies available to you.
            </p>
            <p>
              Disputes will be handled by the courts or other competent
              bodies in Kenya as permitted by applicable law.
            </p>
          </Section>

          <Section id="changes" title="17. Changes to These Terms">
            <p>
              We may update these Terms from time to time. We will communicate
              material changes through the Service or by email before they
              take effect where appropriate or required by law.
            </p>
            <p>
              If you do not agree with an update, you may stop using the
              Service and cancel your subscription before the update takes
              effect. Continued use after an effective change may indicate
              acceptance where permitted by law.
            </p>
          </Section>

          <Section id="general" title="18. General">
            <p>
              These Terms and the Privacy Policy form the agreement between
              you and Lock-In regarding the Service, together with any
              applicable additional terms presented at purchase or when
              using specific features.
            </p>
            <p>
              If a provision is found invalid or unenforceable, the remaining
              provisions continue to apply to the extent permitted by law.
              Failure to enforce a right immediately does not waive that right.
            </p>
            <p>
              You may not transfer your account or your rights under these
              Terms to another person without our consent.
            </p>
          </Section>

          <Section id="contact" title="19. Contact Us">
            <p>For questions about these Terms, contact:</p>
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
              Also see our <Link to="/privacy" className="text-[#8B714A] underline underline-offset-4">Privacy Policy</Link>.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
