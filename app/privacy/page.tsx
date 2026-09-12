import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${site.name}. Understand how we collect, handle, and safeguard your data during GoHighLevel implementation and consulting engagements.`,
  alternates: { canonical: `${site.url}/privacy` },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "September 1, 2026";

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-12 pb-10 md:pt-16 md:pb-14 bg-surface border-b border-gray-100 text-center">
        <div className="container-narrow">
          <span className="eyebrow mb-3 block w-fit mx-auto">Legal</span>
          <h1 className="text-display mb-3">Privacy Policy</h1>
          <p className="text-body text-gray-500">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-md">
        <div className="container-narrow">
          <div className="prose prose-gray max-w-none flex flex-col gap-8 text-body text-gray-600 leading-relaxed">
            <div>
              <h2 className="text-title mb-3">1. Introduction</h2>
              <p>
                {site.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) provides professional GoHighLevel implementation, CRM architecture, workflow automation, and custom systems integration services. This Privacy Policy explains our practices regarding the collection, use, disclosure, and protection of information when you visit our website ({site.url}) or engage us for implementation and consulting services.
              </p>
            </div>

            <div>
              <h2 className="text-title mb-3">2. Information We Collect</h2>
              <p className="mb-3">
                We collect information directly from you when you submit an inquiry, schedule a strategy call, or enter into a service agreement with us:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                <li>
                  <strong className="text-ink-900">Contact Details:</strong> Name, business email address, phone number, company name, and job title.
                </li>
                <li>
                  <strong className="text-ink-900">Business & Workflow Details:</strong> Information regarding your current tech stack, sales pipelines, lead volume, and operational requirements provided during discovery and scoping.
                </li>
                <li>
                  <strong className="text-ink-900">Platform Credentials & Access Tokens:</strong> When authorized by you to perform configuration on your GoHighLevel account or third-party tools, we receive administrative access via delegated user invitations or secure API keys. We never request or store raw passwords.
                </li>
                <li>
                  <strong className="text-ink-900">Technical Usage Data:</strong> Anonymized analytical data collected when you navigate our website (browser type, IP address, referral sources, and page interactions).
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-title mb-3">3. How We Use Your Information</h2>
              <p className="mb-3">We utilize collected information exclusively for legitimate business purposes:</p>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                <li>To deliver, configure, test, and maintain your GoHighLevel systems and workflows.</li>
                <li>To communicate project milestones, deliverables, scope updates, and technical documentation.</li>
                <li>To respond to your inquiries and support requests.</li>
                <li>To fulfill contractual obligations and process billing invoices.</li>
                <li>To monitor, secure, and improve our website performance and user experience.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-title mb-3">4. Client Account Access & Confidentiality</h2>
              <p className="mb-3">
                Given the operational nature of our implementation services, we adhere to strict data security and confidentiality protocols:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                <li>
                  <strong className="text-ink-900">Principle of Least Privilege:</strong> We only request the minimum permissions required to perform the scoped implementation work within your GoHighLevel sub-account.
                </li>
                <li>
                  <strong className="text-ink-900">Zero Customer Data Ownership:</strong> We do not claim ownership of, sell, license, or repurpose any end-customer records, lead databases, or proprietary workflows residing within your accounts.
                </li>
                <li>
                  <strong className="text-ink-900">Non-Disclosure:</strong> All client data, workflows, and business strategies are treated as confidential information subject to binding non-disclosure agreements.
                </li>
                <li>
                  <strong className="text-ink-900">Access Revocation:</strong> Following the handover and completion of the warranty support period, we encourage and verify the removal of our administrative user accounts from your platform.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-title mb-3">5. Third-Party Services & Sub-processors</h2>
              <p className="mb-3">
                In configuring your systems, we may interact with third-party platforms that you license directly, including:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                <li><strong className="text-ink-900">GoHighLevel / HighLevel:</strong> Core CRM, automation engine, and communication hosting.</li>
                <li><strong className="text-ink-900">Communications Providers:</strong> Twilio, LeadConnector Phone, LC Email, Mailgun, and SendGrid for messaging and deliverability.</li>
                <li><strong className="text-ink-900">Payment Processors:</strong> Stripe and PayPal for payment integrations.</li>
                <li><strong className="text-ink-900">Integration Platforms:</strong> Make.com, Zapier, and custom webhook middleware.</li>
              </ul>
              <p className="mt-3">
                Each third-party service operates under its respective privacy policy and terms of service. We advise reviewing their policies directly.
              </p>
            </div>

            <div>
              <h2 className="text-title mb-3">6. Data Security</h2>
              <p>
                We implement technical and organizational safeguards to protect your personal and business data against unauthorized access, loss, or alteration. These include multi-factor authentication on all internal accounts, encrypted credential management tools, and encrypted communications.
              </p>
            </div>

            <div>
              <h2 className="text-title mb-3">7. Your Data Rights</h2>
              <p className="mb-3">Depending on your jurisdiction (including GDPR and CCPA), you may have the right to:</p>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                <li>Access the personal information we hold about you.</li>
                <li>Request correction of inaccurate or incomplete records.</li>
                <li>Request deletion or erasure of your personal data.</li>
                <li>Restrict or object to specific processing activities.</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us at{" "}
                <a href={`mailto:${site.email}`} className="text-ink-900 underline font-medium">
                  {site.email}
                </a>.
              </p>
            </div>

            <div>
              <h2 className="text-title mb-3">8. Changes to This Policy</h2>
              <p>
                We may periodically update this Privacy Policy to reflect modifications in our operational practices or legal requirements. Updates will be published on this page with an updated revision date.
              </p>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <h2 className="text-title mb-3">9. Contact Us</h2>
              <p className="mb-3">
                If you have questions, concerns, or requests regarding this Privacy Policy, please contact our team:
              </p>
              <div className="bg-surface p-6 rounded-lg border border-gray-200 flex flex-col gap-2">
                <p className="font-bold text-ink-900">{site.name}</p>
                <p className="text-sm text-gray-500">GoHighLevel Implementation & Business Automation</p>
                <p className="text-sm">
                  Email:{" "}
                  <a href={`mailto:${site.email}`} className="text-accent underline">
                    {site.email}
                  </a>
                </p>
                <p className="text-sm">
                  Website:{" "}
                  <a href={site.url} className="text-accent underline">
                    {site.url}
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <Link href="/" className="btn btn-outline">
                ← Return to Home
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-ink-900 underline">
                View Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
