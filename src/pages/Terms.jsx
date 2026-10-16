
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
    <section
      id={id}
      className="scroll-mt-28 border-t border-[#25231F]/10 py-8 sm:py-10"
    >
      <h2 className="font-display text-3xl font-normal tracking-tight sm:text-4xl">
        {title}
      </h2>

      <div className="mt-5 space-y-4 text-sm leading-7 text-[#625C53]">
        {children}
      </div>
    </section>
  );
}

function LegalLink({ to, children }) {
  return (
    <Link
      to={to}
      className="text-[#8B714A] underline underline-offset-4"
    >
      {children}
    </Link>
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
            These Terms explain the rules that apply when you use
            Lock-In, manage your plans, purchase a subscription or
            use Lock-In AI.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-xs text-[#625C53]">
            <span>Effective date: 15 October 2026</span>
            <span>Last updated: 15 October 2026</span>
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

          <LegalLink to="/privacy">
            <span className="mt-8 inline-block border-b border-[#8B714A] pb-1 no-underline">
              Read our Privacy Policy →
            </span>
          </LegalLink>
        </aside>

        <article className="min-w-0">
          <p className="mb-8 text-sm leading-7 text-[#625C53]">
            These Terms and Conditions ("Terms") govern your access
            to and use of the Lock-In application, website and related
            services ("Service"). By creating an account, purchasing
            a subscription or using the Service, you agree to these
            Terms. If you do not agree, do not use the Service.
          </p>

          <Section id="who-we-are" title="1. Who We Are">
            <p>
              Lock-In is a personal planning and productivity service
              operated by Sensation Marketing Agency ("Lock-In",
              "we", "us" or "our").
            </p>
            <p>
              You can contact us using the email address or telephone
              number provided in the Contact Us section of these Terms.
            </p>
          </Section>

          <Section id="account" title="2. Eligibility and Your Account">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                You must be at least 18 years old to create an account
                and independently enter into a subscription agreement
                with us.
              </li>
              <li>
                You must provide accurate, current account information
                and update it when necessary.
              </li>
              <li>
                You are responsible for maintaining the confidentiality
                of your login credentials and for activity carried out
                through your account.
              </li>
              <li>
                Notify us promptly if you suspect unauthorised access
                to your account.
              </li>
              <li>
                Your account is for your personal use. You must not
                sell, transfer, share or provide access to it in a way
                that circumvents our account or subscription rules.
              </li>
              <li>
                We may take reasonable steps to protect accounts,
                investigate suspected misuse and prevent unauthorised
                access.
              </li>
            </ul>
          </Section>

          <Section id="service" title="3. What Lock-In Offers">
            <p>
              Lock-In helps you organise goals, plans, routines,
              tasks, notes, self-care activities and personal reviews.
              Available features depend on your subscription plan and
              the features currently supported by the Service.
            </p>

            <p>
              <strong className="text-[#25231F]">Basic:</strong>{" "}
              Core planning features, including vision and goal
              planning, monthly planning, weekly planners, notes
              and monthly reviews.
            </p>

            <p>
              <strong className="text-[#25231F]">Premium:</strong>{" "}
              Core planning features plus limited Lock-In AI
              capabilities, which may include AI chat, voice
              interactions and supported check-ins.
            </p>

            <p>
              Email reminders and other convenience features are
              available where supported. Their availability may
              depend on your settings, permissions and the
              functionality of the Service.
            </p>

            <p>
              We may introduce new features, improve existing ones
              or discontinue features when reasonably necessary.
              Where a change materially affects a paid feature,
              we will provide notice where reasonably practicable
              and address any applicable subscription rights in
              accordance with these Terms and the law.
            </p>
          </Section>

          <Section id="plans" title="4. Plans, Prices and Payment">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[300px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-[#25231F]/15">
                    <th className="py-3 pr-4 font-medium text-[#25231F]">
                      Plan
                    </th>
                    <th className="py-3 pr-4 font-medium text-[#25231F]">
                      Price
                    </th>
                    <th className="py-3 font-medium text-[#25231F]">
                      Includes
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b border-[#25231F]/10">
                    <td className="py-4 pr-4">Basic</td>
                    <td className="whitespace-nowrap py-4 pr-4">
                      KSh 300/month
                    </td>
                    <td className="py-4">
                      Core planning features without AI chat or voice.
                    </td>
                  </tr>

                  <tr className="border-b border-[#25231F]/10">
                    <td className="py-4 pr-4">Premium</td>
                    <td className="whitespace-nowrap py-4 pr-4">
                      KSh 400/month
                    </td>
                    <td className="py-4">
                      Core planning plus limited AI chat, voice
                      and supported check-ins.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <ul className="list-disc space-y-2 pl-5">
              <li>
                Subscription prices are stated in Kenyan shillings
                (KSh) and billed monthly unless a different billing
                period is expressly shown at checkout.
              </li>
              <li>
                Subscriptions may renew automatically where recurring
                billing is enabled. You can cancel before the next
                renewal to prevent subsequent subscription charges.
                Any applicable renewal details will be shown during
                purchase or in your account.
              </li>
              <li>
                Payments must be made using an available payment
                method that you are authorised to use. The payment
                methods supported for a transaction will be displayed
                during checkout.
              </li>
              <li>
                The final payable amount, including any applicable
                taxes or additional charges, will be disclosed at
                checkout before you confirm payment.
              </li>
              <li>
                If a payment fails or a subscription expires, access
                to paid features may be restricted until payment
                succeeds or the subscription is renewed. We will
                communicate relevant payment or access information
                where supported.
              </li>
              <li>
                If we change subscription prices, the revised price
                will apply to new purchases and, after reasonable
                advance notice of at least 30 days, to affected
                subsequent renewals, subject to applicable law.
              </li>
              <li>
                You are responsible for reviewing the plan,
                price and billing terms presented before confirming
                a purchase.
              </li>
            </ul>
          </Section>

          <Section id="refunds" title="5. Refunds and Cancellation">
            <p>
              You may cancel your subscription at any time. Where
              cancellation is completed successfully, it stops future
              renewals, and your paid access ordinarily continues
              until the end of the current paid period unless access
              is lawfully suspended or terminated for another reason.
            </p>

            <p>
              You may request a refund within seven days of the
              relevant subscription payment. After that period,
              subscription payments are generally non-refundable,
              except where a refund is required by applicable law
              or is approved by us under an applicable refund policy.
            </p>

            <p>
              A refund request is not automatically an approval.
              We may need to verify the transaction, subscription
              status and reason for the request before making a
              decision.
            </p>

            <p>
              To request a refund or ask about cancellation, contact
              sensationmagency@gmail.com. Include the email address
              associated with your account, the payment date and
              the payment reference if available. Never send your
              password or full payment-card details.
            </p>

            <p>
              Approved refunds will ordinarily be returned through
              the original payment method where supported. The time
              required for the funds to appear depends on the payment
              provider and financial institution.
            </p>

            <p>
              Cancelling a subscription does not automatically delete
              your account or planner content. Account deletion is a
              separate action and is subject to our{" "}
              <LegalLink to="/privacy">Privacy Policy</LegalLink>.
            </p>

            <p>
              Nothing in these Terms removes consumer rights or
              remedies that cannot lawfully be excluded under
              Kenyan law.
            </p>
          </Section>

          <Section id="ai" title="6. Lock-In AI">
            <p>
              Lock-In AI provides productivity and planning assistance.
              Depending on the features available to you, it may help
              with brainstorming, organising tasks, reviewing progress,
              summarising information and suggesting ways to approach
              your goals.
            </p>

            <p>
              AI-generated responses may be inaccurate, incomplete,
              misleading or outdated. You should review important
              information and use your own judgement before acting
              on suggestions.
            </p>

            <p>
              Lock-In AI is not a substitute for professional medical,
              mental health, legal, financial or other specialist
              advice. Do not rely on AI responses as the sole basis
              for high-impact decisions.
            </p>

            <p>
              Premium AI features are subject to usage allowances,
              technical availability and any applicable limits
              displayed in the Service. AI chat, voice and other
              AI capabilities are not unlimited unless expressly
              stated in the applicable plan details.
            </p>

            <p>
              Additional AI usage, where offered, may be subject to
              separate prices, credits or purchase terms. Any charge
              must be presented before you confirm the relevant
              purchase.
            </p>

            <p>
              AI features may be unavailable due to maintenance,
              service-provider interruptions, capacity constraints
              or technical issues. We do not guarantee that every
              AI request will receive a response or produce a
              particular result.
            </p>

            <p>
              Where an AI feature requires access to your planner
              information, microphone or other device capability,
              that feature will operate subject to the applicable
              settings and permissions. You should only grant
              permissions you are comfortable with.
            </p>
          </Section>

          <Section id="acceptable-use" title="7. Acceptable Use">
            <p>
              You agree to use Lock-In lawfully and responsibly.
              You must not:
            </p>

            <ul className="list-disc space-y-2 pl-5">
              <li>
                Use the Service to violate applicable law or
                infringe another person's rights.
              </li>
              <li>
                Attempt to gain unauthorised access to accounts,
                systems, infrastructure or data.
              </li>
              <li>
                Introduce malware, interfere with the Service,
                disrupt its operation or deliberately overload
                its systems.
              </li>
              <li>
                Scrape, harvest or collect information from the
                Service through unauthorised means.
              </li>
              <li>
                Reverse engineer, copy or circumvent technical
                protections except to the extent that applicable
                law expressly permits the activity.
              </li>
              <li>
                Use AI features to facilitate unlawful activity,
                harassment, abuse, fraud or the violation of
                another person's rights.
              </li>
              <li>
                Circumvent subscription charges, AI usage limits,
                account restrictions or other security measures.
              </li>
              <li>
                Impersonate another person, misrepresent your
                identity or create accounts for deceptive purposes.
              </li>
              <li>
                Sell, sublicense or commercially exploit the
                Service without our written permission.
              </li>
            </ul>

            <p>
              We may investigate suspected violations and take
              proportionate action, including restricting access
              or suspending an account, subject to applicable law.
            </p>
          </Section>

          <Section id="content" title="8. Your Content">
            <p>
              You retain the rights you hold in the goals, tasks,
              notes, vision-board entries, plans and other material
              you create or submit through Lock-In ("Your Content").
            </p>

            <p>
              You are responsible for Your Content, including
              ensuring that you have the rights necessary to
              submit it and that it does not violate applicable
              law or another person's rights.
            </p>

            <p>
              You grant us permission to host, store, process,
              transmit and display Your Content only as reasonably
              necessary to provide, maintain, secure and support
              the Service, operate features you choose to use,
              and comply with legal obligations.
            </p>

            <p>
              Where you choose to use AI features, relevant
              information may be processed to generate responses.
              The processing of personal data and the use of
              service providers are explained further in our{" "}
              <LegalLink to="/privacy">Privacy Policy</LegalLink>.
            </p>

            <p>
              You should avoid submitting passwords, payment-card
              details or other sensitive information that is not
              needed for your planning activities. Consider
              exporting or retaining copies of important content
              where the Service provides that functionality.
            </p>

            <p>
              We do not acquire ownership of Your Content simply
              because you use Lock-In. Any use of Your Content
              remains subject to these Terms, the functionality
              you choose to use and applicable privacy law.
            </p>
          </Section>

          <Section
            id="intellectual-property"
            title="9. Our Intellectual Property"
          >
            <p>
              The Lock-In name, branding, logos, software, interface,
              visual design, written materials and other elements
              of the Service are owned by or licensed to their
              respective rights holders and are protected by
              applicable intellectual property laws.
            </p>

            <p>
              Subject to these Terms and your active subscription
              where one is required, we grant you a limited,
              personal, non-exclusive, non-transferable and
              revocable licence to use the Service for your
              personal planning and productivity activities.
            </p>

            <p>
              You may not copy, distribute, modify, sell or create
              derivative works from our protected materials except
              with our permission or where applicable law permits.
            </p>

            <p>
              These Terms do not transfer ownership of our
              intellectual property to you. Any rights not
              expressly granted remain with their respective
              owners or licensors.
            </p>
          </Section>

          <Section id="affiliates" title="10. Affiliate Programme">
            <p>
              Lock-In may offer an affiliate programme that rewards
              approved participants for referring eligible paying
              subscribers. Participation is subject to approval,
              these Terms and any additional programme rules
              communicated to affiliates.
            </p>

            <ul className="list-disc space-y-2 pl-5">
              <li>
                Applicants must receive approval before promoting
                Lock-In as an affiliate or receiving access to
                affiliate referral tools.
              </li>
              <li>
                Approved affiliates earn a commission of 15% of
                each eligible subscription payment made by a user
                they refer, for that user's first three monthly
                payments.
              </li>
              <li>
                At the listed subscription prices, this equals
                KSh 45 per eligible Basic payment or KSh 60 per
                eligible Premium payment.
              </li>
              <li>
                Commission is earned only after the relevant
                payment has cleared and the seven-day refund
                request period has passed, provided the transaction
                remains eligible under the programme rules.
              </li>
              <li>
                Commissions associated with refunded, reversed,
                charged-back, fraudulent or otherwise ineligible
                transactions may be withheld or reversed. Where
                lawful, amounts already paid may be offset against
                future commissions.
              </li>
              <li>
                Affiliate payouts are made through M-Pesa using
                verified payout details. The applicable payout
                schedule and any minimum payout threshold will
                be communicated to approved affiliates through
                the programme's applicable instructions.
              </li>
              <li>
                Self-referrals, fake accounts, misleading referrals
                and attempts to manipulate the commission system
                are prohibited.
              </li>
              <li>
                Affiliates must not spam, make deceptive claims,
                promise unavailable features or represent
                themselves as employees or authorised agents
                of Lock-In.
              </li>
              <li>
                Affiliates participate independently and are
                responsible for their own tax and legal obligations.
                Participation does not create an employment,
                partnership or agency relationship.
              </li>
              <li>
                We may change commission rates for future eligible
                referrals with at least 30 days' notice. We may
                suspend or end participation for fraud, material
                violations or other legitimate programme reasons.
              </li>
            </ul>
          </Section>

          <Section id="availability" title="11. Availability and Changes">
            <p>
              We aim to provide a reliable Service, but we do not
              guarantee uninterrupted, continuous or error-free
              operation.
            </p>

            <p>
              Access may be affected by maintenance, software
              updates, internet connectivity, device limitations,
              third-party providers, security incidents or
              circumstances beyond our reasonable control.
            </p>

            <p>
              We may update, maintain or modify the Service.
              Where a change materially affects paid functionality,
              we will provide reasonable notice where practicable
              and comply with applicable legal obligations.
            </p>

            <p>
              We are not responsible for interruptions caused
              entirely by your device, network, internet service
              provider or third-party services outside our
              reasonable control, subject to rights that cannot
              lawfully be excluded.
            </p>
          </Section>

          <Section id="disclaimers" title="12. Disclaimers">
            <p>
              Lock-In is a planning and productivity tool. It can
              help you organise activities and reflect on progress,
              but we do not guarantee that you will achieve a
              particular goal, improve productivity or obtain
              a specific personal or professional outcome.
            </p>

            <p>
              To the extent permitted by applicable law, the
              Service is provided according to its availability
              and current functionality. We do not warrant that
              every feature will always be available, compatible
              with every device or free from errors.
            </p>

            <p>
              You remain responsible for your decisions, plans
              and actions, including how you use AI-generated
              information.
            </p>

            <p>
              Nothing in these Terms excludes any statutory
              guarantee, consumer right or remedy that cannot
              lawfully be excluded.
            </p>
          </Section>

          <Section id="liability" title="13. Limitation of Liability">
            <p>
              To the extent permitted by applicable law, we are
              not liable for indirect, incidental, special or
              consequential losses arising from your use of,
              or inability to use, the Service.
            </p>

            <p>
              We are not responsible for losses arising from
              inaccurate information you provide, your failure
              to protect your account credentials, your decisions
              based on AI-generated responses or interruptions
              caused by circumstances outside our reasonable
              control, except where applicable law provides
              otherwise.
            </p>

            <p>
              You are responsible for maintaining appropriate
              copies of important information where the Service
              offers export or backup functionality. We do not
              guarantee that information will be available
              indefinitely or recoverable in every circumstance.
            </p>

            <p>
              Nothing in these Terms excludes or limits liability
              for fraud, fraudulent misrepresentation, wilful
              misconduct or any other liability that cannot
              lawfully be excluded or limited. These Terms do
              not restrict consumer rights or remedies available
              under applicable Kenyan law.
            </p>
          </Section>

          <Section id="termination" title="14. Suspension and Termination">
            <p>
              You may stop using Lock-In at any time. You may
              cancel your subscription and request account
              deletion using the available account controls
              or by contacting us.
            </p>

            <p>
              We may restrict, suspend or terminate access where
              reasonably necessary because of a material breach
              of these Terms, suspected fraud, unlawful activity,
              security risks, non-payment or a legal requirement.
            </p>

            <p>
              Where reasonably practicable and legally permitted,
              we will provide notice and an opportunity to address
              the issue before taking action. Immediate restrictions
              may be necessary to protect users, the Service or
              our systems.
            </p>

            <p>
              If your access ends, your permission to use the
              affected features ends. Any refund entitlement
              will be determined under these Terms and applicable
              law.
            </p>

            <p>
              Account termination and subscription cancellation
              are separate matters unless the Service expressly
              combines them. Deletion and retention of personal
              data are governed by our{" "}
              <LegalLink to="/privacy">Privacy Policy</LegalLink>.
            </p>

            <p>
              Provisions that by their nature should continue
              after termination, including those relating to
              intellectual property, liability, disputes and
              governing law, will continue to apply to the
              extent permitted by law.
            </p>
          </Section>

          <Section id="privacy" title="15. Privacy">
            <p>
              Our{" "}
              <LegalLink to="/privacy">Privacy Policy</LegalLink>
              {" "}explains how we collect, use, store, disclose
              and protect personal data in connection with
              Lock-In.
            </p>

            <p>
              By using the Service, you acknowledge that personal
              data will be handled as described in that policy
              and in accordance with applicable data protection
              law.
            </p>

            <p>
              Please read the Privacy Policy to understand your
              rights, the purposes for which information is
              processed and how to contact us about privacy
              matters.
            </p>
          </Section>

          <Section id="law" title="16. Governing Law and Disputes">
            <p>
              These Terms are governed by the laws of Kenya,
              subject to any mandatory legal protections that
              apply to you.
            </p>

            <p>
              If you have a concern or dispute, please contact
              us first at sensationmagency@gmail.com so we can
              try to resolve the matter fairly and promptly.
            </p>

            <p>
              Contacting us does not prevent you from exercising
              your statutory rights, making a complaint to a
              competent authority or pursuing any other remedy
              available under applicable law.
            </p>

            <p>
              Any dispute that cannot be resolved informally
              may be referred to a court or other competent
              body in Kenya with jurisdiction over the matter,
              subject to applicable law.
            </p>
          </Section>

          <Section id="changes" title="17. Changes to These Terms">
            <p>
              We may update these Terms to reflect changes to
              Lock-In, our features, payment arrangements, legal
              obligations or business practices.
            </p>

            <p>
              When a change is material, we will provide notice
              through the Service, by email or through another
              reasonable communication method before it takes
              effect, where practicable or required by law.
            </p>

            <p>
              The updated version will display its effective
              date. If you do not agree to a material change,
              you may stop using the Service and cancel your
              subscription before the change takes effect.
            </p>

            <p>
              Where applicable law requires express consent
              to a change, we will obtain that consent rather
              than relying solely on continued use.
            </p>
          </Section>

          <Section id="general" title="18. General">
            <p>
              These Terms and the Privacy Policy govern your
              use of Lock-In, together with any additional
              terms clearly presented when you purchase or
              use a specific feature.
            </p>

            <p>
              If any provision of these Terms is found invalid
              or unenforceable, the remaining provisions will
              continue to apply to the extent permitted by law.
            </p>

            <p>
              A failure or delay in exercising a right under
              these Terms does not automatically waive that
              right.
            </p>

            <p>
              You may not transfer your account or assign your
              rights or obligations under these Terms without
              our consent. We may transfer our rights and
              obligations where permitted by law, provided
              that doing so does not unlawfully reduce your
              rights.
            </p>

            <p>
              These Terms do not create an employment,
              partnership, joint venture or agency relationship
              between you and us.
            </p>
          </Section>

          <Section id="contact" title="19. Contact Us">
            <p>
              If you have questions about these Terms,
              subscriptions, cancellations or the operation
              of Lock-In, you can reach us using the details
              below.
            </p>

            <div className="border border-[#25231F]/10 p-5">
              <p>
                <strong className="text-[#25231F]">Lock-In</strong>
              </p>

              <p>Operated by Sensation Marketing Agency</p>

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
            </div>
          </Section>

          <div className="border-t border-[#25231F]/10 pt-8">
            <p className="text-sm leading-7 text-[#625C53]">
              By using Lock-In, you acknowledge these Terms.
              Please also review our{" "}
              <LegalLink to="/privacy">Privacy Policy</LegalLink>
              {" "}for information about personal data and privacy.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
