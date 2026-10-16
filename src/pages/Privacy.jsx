
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

function ContactLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-[#8B714A] underline underline-offset-4"
    >
      {children}
    </a>
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
            How Lock-In handles your personal information when you manage
            your account, use the planner, or access AI-powered features.
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

          <Link
            to="/terms"
            className="mt-8 inline-block border-b border-[#8B714A] pb-1 text-sm text-[#8B714A]"
          >
            Read Terms &amp; Conditions →
          </Link>
        </aside>

        <article className="min-w-0">
          <p className="mb-8 text-sm leading-7 text-[#625C53]">
            This Privacy Policy explains how Lock-In collects, uses, stores,
            and protects personal information in connection with its planning
            and productivity services. Lock-In is operated by Sensation
            Marketing Agency, a registered business. By using the Service,
            you acknowledge that your information may be handled as described
            in this Policy, subject to your rights under applicable law.
          </p>

          <Section id="controller" title="1. Who Is Responsible">
            <p>
              Sensation Marketing Agency is responsible for the operation
              of Lock-In and for handling privacy enquiries relating to
              the Service.
            </p>

            <p>
              If you have a question about your personal information, wish
              to exercise a privacy right, or have a concern about how your
              information is handled, you can contact us using the details
              provided in the Contact Us section below.
            </p>

            <p>
              This Policy is intended to be read alongside the Lock-In
              Terms &amp; Conditions.
            </p>
          </Section>

          <Section id="information" title="2. Information We Handle">
            <p>
              The information associated with your use of Lock-In depends
              on the features you access and the information you choose
              to provide. It may include the following categories:
            </p>

            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-[#25231F]">
                  Account information:
                </strong>{" "}
                your name, email address, account identifier, country
                or region, and information used to authenticate and
                maintain your account.
              </li>

              <li>
                <strong className="text-[#25231F]">
                  Planner information:
                </strong>{" "}
                goals, tasks, schedules, notes, vision-board entries,
                progress reviews, self-care activities, preferences,
                and other content you choose to save.
              </li>

              <li>
                <strong className="text-[#25231F]">
                  AI interactions:
                </strong>{" "}
                prompts, messages, responses, and related information
                processed when you use AI-powered planning, recommendations,
                progress insights, or voice features.
              </li>

              <li>
                <strong className="text-[#25231F]">
                  Subscription and transaction information:
                </strong>{" "}
                your subscription plan, account status, payment confirmations,
                transaction references, amounts, purchase history, and
                information needed to manage billing or resolve payment
                disputes.
              </li>

              <li>
                <strong className="text-[#25231F]">
                  Technical and usage information:
                </strong>{" "}
                technical logs, diagnostic information, and information
                about interactions with the Service where generated or
                collected by the systems used to operate it.
              </li>

              <li>
                <strong className="text-[#25231F]">
                  Communications:
                </strong>{" "}
                information you provide when contacting support, reporting
                a problem, or making a privacy request.
              </li>
            </ul>

            <p>
              Please provide only information that is relevant to your
              planning needs. Avoid including passwords, payment credentials,
              or sensitive personal information that is unnecessary for
              the feature you are using.
            </p>
          </Section>

          <Section id="use" title="3. How Information Is Used">
            <p>
              Personal information may be used for the following purposes:
            </p>

            <ul className="list-disc space-y-2 pl-5">
              <li>Create, authenticate, and maintain your account.</li>
              <li>Save, organise, and display your planner content.</li>
              <li>Provide scheduling, progress tracking, and other requested features.</li>
              <li>Deliver AI-powered assistance and related functionality.</li>
              <li>Manage subscriptions, process payment confirmations, and handle billing enquiries.</li>
              <li>Maintain the reliability, functionality, and security of the Service.</li>
              <li>Investigate suspected fraud, misuse, or violations of the Terms &amp; Conditions.</li>
              <li>Respond to enquiries and provide customer support.</li>
              <li>Meet applicable legal, regulatory, and record-keeping obligations.</li>
            </ul>

            <p>
              We handle personal information for purposes connected to
              providing and managing Lock-In, meeting legal obligations,
              protecting the Service, and other lawful purposes that apply
              to the relevant processing activity.
            </p>
          </Section>

          <Section id="ai" title="4. AI Features">
            <p>
              Lock-In may provide AI-powered features such as planning
              assistance, progress insights, smart recommendations,
              agent actions, and voice interactions. These features use
              information relevant to your request to generate responses
              or perform the functions you initiate.
            </p>

            <p>
              When an AI feature uses an external AI service provider,
              relevant prompts, messages, contextual planner information,
              or voice-related data may be transmitted to that provider
              for processing. The information involved depends on the
              feature you choose to use.
            </p>

            <p>
              AI-generated responses may be incomplete, inaccurate, or
              unsuitable for your circumstances. You should review
              suggestions before acting on them. AI features are intended
              to support your planning and productivity, not to replace
              your own judgement or qualified professional advice.
            </p>

            <p>
              Where AI conversation history or related memory is saved
              within Lock-In, it may be used to maintain context and
              improve continuity across your interactions. You remain
              responsible for the information you choose to share.
              Available memory controls can be used to manage or remove
              saved AI-related information.
            </p>

            <p>
              Voice features may process audio and associated conversation
              data to provide spoken interactions. The handling of audio,
              transcripts, and related records depends on the feature and
              the services used to deliver it.
            </p>

            <p>
              Do not use AI features to submit passwords, payment card
              details, or sensitive information that is not necessary
              for your request.
            </p>
          </Section>

          <Section id="payments" title="5. Payments">
            <p>
              Lock-In offers paid subscription plans and may provide
              additional paid features or usage packages. The available
              prices, included features, usage allowances, and renewal
              terms are presented through the relevant purchase flow.
            </p>

            <p>
              Payment transactions are handled through the payment
              methods and providers made available at checkout. Those
              providers may process payment information under their own
              privacy policies and applicable terms.
            </p>

            <p>
              Lock-In may receive transaction references, payment status,
              amounts, timestamps, subscription details, and other
              information needed to confirm purchases, manage access,
              address failed payments, process refunds, and maintain
              appropriate financial records.
            </p>

            <p>
              Do not send payment card details, account passwords, or
              other payment credentials through planner notes, AI chats,
              or support messages.
            </p>
          </Section>

          <Section id="sharing" title="6. When Information Is Shared">
            <p>
              Personal information may be processed by service providers
              where necessary to operate, maintain, and support Lock-In.
              Depending on the feature, these may include providers of
              hosting, databases, authentication, payment processing,
              AI services, communications, and technical infrastructure.
            </p>

            <p>
              Information may also be disclosed where required by law,
              pursuant to a lawful request, or where reasonably necessary
              to investigate suspected fraud, enforce the Terms &amp;
              Conditions, protect users, or safeguard the rights and
              security of the Service.
            </p>

            <p>
              Where a service provider processes personal information on
              our behalf, access should be limited to what is reasonably
              necessary for its role and subject to applicable contractual
              and legal requirements.
            </p>

            <p>
              Some providers may process information in countries outside
              Kenya. Where personal information is transferred across
              borders, the transfer must be handled in accordance with
              applicable data protection requirements.
            </p>

            <p>
              We do not treat your personal planner content as public
              content merely because you save it in Lock-In. Information
              is shared as necessary for the operation of the Service,
              as described in this Policy, or where otherwise permitted
              or required by law.
            </p>
          </Section>

          <Section id="retention" title="7. Data Retention">
            <p>
              Personal information is retained for as long as reasonably
              necessary for the purposes for which it was collected,
              including providing the Service, maintaining your account,
              managing subscriptions, resolving disputes, preventing
              misuse, and meeting applicable legal obligations.
            </p>

            <p>
              If you request account deletion, we will handle the request
              in accordance with the applicable deletion process and
              relevant legal requirements. Deletion may remove account
              information and associated planner content, subject to
              information that must be retained or that remains temporarily
              in protected backups.
            </p>

            <p>
              Certain transaction records or other information may need
              to be retained for legal, accounting, security, or dispute
              resolution purposes. Where retention is required, the
              information should not be kept for longer than the applicable
              purpose or legal requirement permits.
            </p>

            <p>
              Information retained in backups may not be removed immediately
              when information is deleted from active systems. Access to
              retained information remains subject to appropriate safeguards
              and applicable requirements.
            </p>
          </Section>

          <Section id="security" title="8. Security">
            <p>
              We take reasonable measures designed to protect personal
              information against unauthorised access, disclosure,
              alteration, loss, and destruction.
            </p>

            <p>
              Security also depends on how you use the Service. Keep your
              login credentials confidential, use a secure device, and
              notify us promptly if you suspect unauthorised access to
              your account.
            </p>

            <p>
              No online service or method of electronic storage can be
              guaranteed to be completely secure. We cannot promise
              that every security risk can be eliminated, but personal
              information should be handled with safeguards appropriate
              to the nature of the information and the risks involved.
            </p>

            <p>
              Where a personal data breach occurs, it will be handled
              in accordance with applicable legal and regulatory
              requirements.
            </p>
          </Section>

          <Section id="rights" title="9. Your Choices and Rights">
            <p>
              Subject to applicable law and the circumstances of your
              request, you may have the right to:
            </p>

            <ul className="list-disc space-y-2 pl-5">
              <li>Be informed about how your personal information is used.</li>
              <li>Request access to personal information held about you.</li>
              <li>Request correction of inaccurate or incomplete information.</li>
              <li>Request deletion of personal information where legally applicable.</li>
              <li>Object to or request restriction of certain processing where applicable.</li>
              <li>Withdraw consent where processing relies on consent, without affecting the lawfulness of earlier processing.</li>
              <li>Raise a complaint with the relevant data protection authority.</li>
            </ul>

            <p>
              You can also use the account and feature controls made
              available in Lock-In to manage your information, preferences,
              and AI-related memory. The controls available may depend
              on the feature.
            </p>

            <p>
              To make a privacy request, email{" "}
              <ContactLink href="mailto:sensationmagency@gmail.com">
                sensationmagency@gmail.com
              </ContactLink>{" "}
              or contact us by phone or WhatsApp at{" "}
              <ContactLink href="https://wa.me/254797983216">
                +254 797 983216
              </ContactLink>.
            </p>

            <p>
              We may need to verify your identity before processing a
              request. Some information may need to be retained, and
              certain requests may be limited, where permitted or required
              by applicable law.
            </p>
          </Section>

          <Section id="children" title="10. Children's Privacy">
            <p>
              Lock-In is intended for individuals aged 18 and over.
              We do not knowingly seek to collect children's personal
              information in circumstances where doing so would violate
              applicable law.
            </p>

            <p>
              If you believe a child has provided personal information
              in circumstances that are not permitted, please contact
              us. We will review the concern and take appropriate action
              in accordance with applicable law.
            </p>
          </Section>

          <Section id="changes" title="11. Changes to This Policy">
            <p>
              This Privacy Policy may be updated from time to time to
              reflect changes to Lock-In, its features, information
              handling practices, or applicable legal requirements.
            </p>

            <p>
              Where a change is material, we will take reasonable steps
              to communicate it through the Service, by email, or through
              another appropriate channel where required by law.
            </p>

            <p>
              The effective date and last-updated date at the top of
              this page identify the version currently published.
              Continued use of Lock-In after an update is subject to
              the revised Policy to the extent permitted by applicable law.
            </p>
          </Section>

          <Section id="contact" title="12. Contact Us">
            <div className="border border-[#25231F]/10 p-5">
              <p>
                <strong className="text-[#25231F]">Lock-In</strong>
              </p>

              <p>
                Operated by Sensation Marketing Agency
              </p>

              <p>
                Email:{" "}
                <ContactLink href="mailto:sensationmagency@gmail.com">
                  sensationmagency@gmail.com
                </ContactLink>
              </p>

              <p>
                Phone / WhatsApp:{" "}
                <ContactLink href="https://wa.me/254797983216">
                  +254 797 983216
                </ContactLink>
              </p>
            </div>

            <p>
              Please include enough information for us to understand
              your enquiry, but do not send passwords, payment credentials,
              or unnecessary sensitive personal information.
            </p>
          </Section>

          <div className="border-t border-[#25231F]/10 pt-8">
            <p className="text-sm text-[#625C53]">
              Read our{" "}
              <Link
                to="/terms"
                className="text-[#8B714A] underline underline-offset-4"
              >
                Terms &amp; Conditions
              </Link>
              .
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
