import type { Metadata } from "next";

const SITE_URL = "https://slowkids.net";

export const metadata: Metadata = {
  title: "Terms of Service | LittleSteps",
  description:
    "LittleSteps Terms of Service — member rights and obligations, passes and payments, withdrawal of subscription, refunds, dispute resolution.",
  alternates: {
    canonical: `${SITE_URL}/en/terms`,
    languages: {
      ko: `${SITE_URL}/terms`,
      en: `${SITE_URL}/en/terms`,
      "x-default": `${SITE_URL}/terms`,
    },
  },
  robots: { index: true, follow: true },
};

export default function TermsEnPage() {
  return (
    <>
      <h1>LittleSteps Terms of Service</h1>
      <p className="legal-meta"><strong>Effective</strong>: 2026-04-28</p>
      <p className="legal-meta"><strong>Last revised</strong>: 2026-05-14</p>
      <p className="legal-meta" style={{ color: "#8C8070" }}>
        This English version is provided for convenience. In case of any
        discrepancy, the <a href="/terms">Korean version</a> shall prevail.
      </p>
      <hr className="legal-hr" />

      <h2>Article 1 (Purpose)</h2>
      <p>
        These Terms govern the rights, obligations, and responsibilities between
        EverydaySummer Inc. (the &quot;Company&quot;) and the members using the
        LittleSteps learning service (the &quot;Service&quot;), as well as other
        matters necessary for the use of the Service.
      </p>

      <h2>Article 2 (Definitions)</h2>
      <p>The following terms shall have the meanings ascribed to them below:</p>
      <ol>
        <li><strong>Service</strong>: all educational content provided by the Company under the &quot;LittleSteps&quot; name through mobile apps (Android, iOS) and the web.</li>
        <li><strong>Member</strong>: an individual, or such individual&apos;s legal guardian, who has entered into a service agreement with the Company.</li>
        <li><strong>User</strong>: a Member and any minor child whom the Member has authorised to use the Service.</li>
        <li><strong>Pass</strong>: a paid right to use the Service or specific learning content for a defined period.</li>
        <li><strong>Free pass</strong>: a temporary, complimentary right to use the Service granted upon sign-up (24 hours) or via event or share rewards.</li>
        <li><strong>In-app purchase (IAP)</strong>: content purchase processed via the Google Play billing system or the Apple App Store billing system.</li>
      </ol>

      <h2>Article 3 (Publication and amendment of these Terms)</h2>
      <ol>
        <li>The Company posts these Terms on the initial screen and the settings menu of the Service so that Members can easily access them.</li>
        <li>The Company may amend these Terms within the scope permitted by applicable law, including the Act on the Regulation of Terms and Conditions, the Act on Consumer Protection in Electronic Commerce, and the Contents Industry Promotion Act.</li>
        <li>When amending these Terms, the Company will announce the effective date and the reason for amendment within the Service at least 7 days before the effective date. For amendments that are unfavourable to Members, notice will be given at least 30 days in advance, and Members will be separately notified by email or app push.</li>
        <li>If a Member does not agree to the amended Terms, the Member may terminate the service agreement. Continued use of the Service after the effective date shall be deemed acceptance of the amended Terms.</li>
      </ol>

      <h2>Article 4 (Formation of the service agreement)</h2>
      <ol>
        <li>The service agreement is formed when a User agrees to these Terms and the Privacy Policy and completes the sign-up process prescribed by the Company.</li>
        <li>
          The Company may refuse or subsequently terminate a service agreement in the following cases:
          <ul>
            <li>identity theft;</li>
            <li>provision of false information;</li>
            <li>application made for the purpose of harming public order or morals;</li>
            <li>failure to meet other application requirements set by the Company.</li>
          </ul>
        </li>
        <li><strong>Minors</strong>: Children under the age of 14 may register only with the consent of their legal guardian (parent), and any payment must be made in the name of, or with the consent of, the legal guardian.</li>
      </ol>

      <h2>Article 5 (Member obligations)</h2>
      <ol>
        <li>Members shall comply with these Terms, the Company&apos;s notices, and applicable law.</li>
        <li>Members shall not disclose, transfer, or lend their account information (email, password, OAuth-linked accounts, etc.) to any third party.</li>
        <li>
          Members shall not engage in the following:
          <ul>
            <li>using the Service for commercial purposes or reproducing/distributing content without authorisation;</li>
            <li>interfering with the operation of the Service (automation, bots, reverse-engineering);</li>
            <li>collecting, storing, or disclosing other Members&apos; personal information;</li>
            <li>infringing the intellectual property rights of the Company or any third party.</li>
          </ul>
        </li>
      </ol>

      <h2>Article 6 (Provision of the Service)</h2>
      <ol>
        <li>
          The Company provides the following services:
          <ul>
            <li>staged learning content (number concepts, arithmetic, etc.);</li>
            <li>recording and statistics of learning progress and results;</li>
            <li>other supplementary services as determined by the Company.</li>
          </ul>
        </li>
        <li>The Service is provided 24 hours a day, 365 days a year in principle, but may be temporarily suspended due to scheduled maintenance, system failures, force majeure, or similar reasons. The Company will give prior notice of such suspensions when practicable.</li>
        <li>The Company may modify or discontinue all or part of the Service with prior notice.</li>
      </ol>

      <h2>Article 7 (Passes and payments)</h2>

      <h3>7.1 Types of passes</h3>
      <ol>
        <li>
          <strong>Free pass</strong>
          <ul>
            <li>Full access to the Service for 24 hours after sign-up.</li>
            <li>Temporary complimentary access may be granted through event or share-reward coupons.</li>
          </ul>
        </li>
        <li>
          <strong>Paid pass (30-day pass)</strong>
          <ul>
            <li>Price: ₩2,200 incl. VAT (displayed price may vary slightly per store exchange and policy).</li>
            <li>Duration: 30 days from the time of purchase, for the specific learning content.</li>
            <li>Payment method: one-time in-app purchase via Google Play billing (Android) or Apple App Store billing (iOS).</li>
          </ul>
        </li>
      </ol>

      <h3>7.2 Payment procedure</h3>
      <ol>
        <li>When a Member selects a pass purchase within the Service, the Member is directed to the Google Play or Apple App Store billing system.</li>
        <li>Payment is processed according to each store&apos;s policies and the chosen payment method (credit card, mobile billing, gift card, etc.). The pass is activated immediately upon completion of payment.</li>
        <li>Payment receipts are issued by each store and can be viewed in the Member&apos;s purchase history within the store.</li>
      </ol>

      <h2>Article 8 (Withdrawal of subscription and refunds)</h2>

      <h3>8.1 General principles</h3>
      <ol>
        <li>All paid passes are charged via the in-app purchase system of Apple App Store or Google Play.</li>
        <li>Members have the right to withdraw subscription and request refunds in accordance with applicable laws, including the Act on Consumer Protection in Electronic Commerce and the Contents Industry Promotion Act. These Terms do not limit such rights.</li>
        <li>
          Refund authority differs by store:
          <ul>
            <li><strong>Apple App Store (iOS)</strong>: refund applications are received, reviewed, approved, and processed solely by Apple under its own policies. <strong>The Company has no authority to process refunds directly.</strong> Upon request, the Company will provide reasonable guidance on the application procedure.</li>
            <li><strong>Google Play (Android)</strong>: a Member may apply directly through Google Play or via the Company. <strong>The Company may process refunds directly through the Google Play Console under Article 8.3 and applicable law.</strong></li>
          </ul>
        </li>
      </ol>

      <h3>8.2 Refund application channels</h3>

      <h4>(1) Apple App Store (iOS) — handled directly by Apple</h4>
      <ol>
        <li>
          <strong>How to apply</strong> (choose whichever is convenient):
          <ul>
            <li><strong>iOS device (recommended)</strong>: Settings → your name (Apple ID) → Media &amp; Purchases → Purchase History → select the item → request a refund.</li>
            <li><strong>Web</strong>: <a href="https://reportaproblem.apple.com" target="_blank" rel="noreferrer">https://reportaproblem.apple.com</a> → sign in with Apple ID → select the item → submit with reason.</li>
          </ul>
        </li>
        <li>Review, approval, and refund are all determined by Apple under its own policies. The Company cannot intervene in approval or denial.</li>
        <li>If a Member contacts the Company about a refund, the Company can only provide reasonable guidance on the application procedure and receipt verification.</li>
      </ol>

      <h4>(2) Google Play (Android) — handled by the Company or Google</h4>
      <ol>
        <li>
          <strong>Path A — direct request via Google Play</strong>
          <ul>
            <li>Google Play app → Menu → Payments &amp; subscriptions → Budget &amp; order history → select the item → &quot;Request a refund&quot;.</li>
            <li>Or web: <a href="https://play.google.com" target="_blank" rel="noreferrer">https://play.google.com</a> → order history → refund request.</li>
            <li>Within 48 hours of purchase, Google Play&apos;s self-refund applies. Beyond that, Google forwards the request to the Company for review.</li>
          </ul>
        </li>
        <li>
          <strong>Path B — request via the Company</strong>
          <ul>
            <li>Email the payment receipt and Member identifier (email or Member ID) to <a href="mailto:contact@everydaysummer.net">contact@everydaysummer.net</a>.</li>
            <li>The Company will review and respond within 7 business days of receipt, under Article 8.3 and applicable law. If approved, the refund will be processed directly to the original payment method via the Google Play Console.</li>
          </ul>
        </li>
      </ol>

      <h4>(3) Refund processing timeline</h4>
      <p>After approval, settlement to the original payment method typically takes 3–14 business days depending on the store and the payment provider (card issuer, carrier, etc.).</p>

      <h3>8.3 Refund review criteria</h3>
      <p>When the Company reviews refunds directly (Google Play applications routed to the Company), the following criteria apply. Apple App Store refunds follow Apple&apos;s own policies and may not be subject to these criteria.</p>

      <h4>(1) Eligible for refund</h4>
      <ol>
        <li>Within 7 days of purchase and content unused: full refund.</li>
        <li>Within 7 days of purchase and less than 1 day of accumulated use: full refund.</li>
        <li>Service unavailable for 7 days or more due to the Company&apos;s fault: pro-rata refund for unused days, or full refund.</li>
      </ol>

      <h4>(2) Refund may be restricted</h4>
      <ol>
        <li>Pass revoked due to a Member&apos;s breach of these Terms (abuse, account sharing, etc.).</li>
        <li>Within 7 days of purchase but 1 day or more of accumulated use (change of mind only).</li>
        <li>Beyond 7 days of purchase (excluding the Company&apos;s fault).</li>
        <li>Refund request for complimentary passes (free pass, event coupons).</li>
      </ol>

      <h3>8.4 Minors&apos; payments</h3>
      <p>
        If a person under 19 years of age has made a payment without the consent of their legal guardian, the user or the legal guardian may request cancellation and refund within a reasonable period after becoming aware of the payment. The Company will confirm the legal guardian&apos;s consent under Article 5 of the Korean Civil Act before processing the refund.
      </p>

      <h2>Article 9 (Termination of the service agreement)</h2>
      <ol>
        <li><strong>Termination by the Member</strong>: a Member may terminate the service agreement (withdraw membership) at any time through the in-service settings menu. Any remaining passes are handled in accordance with Article 8.</li>
        <li><strong>Termination by the Company</strong>: the Company may terminate the agreement after prior notice if a Member materially breaches the obligations in Article 5. Depending on the severity and recoverability of the breach, a temporary suspension may be imposed instead.</li>
        <li>Upon termination, learning records and statistics created by the Member are handled in accordance with the Privacy Policy.</li>
      </ol>

      <h2>Article 10 (Protection of personal information)</h2>
      <p>The Company protects the personal information of Members under applicable law. Details are set out in the separate <a href="/en/privacy">Privacy Policy</a>.</p>

      <h2>Article 11 (Intellectual property)</h2>
      <ol>
        <li>All content within the Service (text, images, audio, code, design, etc.) is owned by the Company or the rightful owner.</li>
        <li>Members shall not reproduce, transmit, publish, distribute, broadcast, or allow third parties to use such content without the prior consent of the Company or the rightful owner.</li>
      </ol>

      <h2>Article 12 (Disclaimer)</h2>
      <ol>
        <li>The Company is not liable for inability to provide the Service due to force majeure, including natural disasters, war, communication outages, power failures, or hacking.</li>
        <li>The Company is not liable for service-use issues caused by the Member&apos;s fault.</li>
        <li>The Company does not guarantee learning outcomes or therapeutic effects, and the Service is not a substitute for medical diagnosis or treatment. If developmental diagnosis or treatment is needed, consultation with a medical professional is recommended.</li>
      </ol>

      <h2>Article 13 (Dispute resolution and jurisdiction)</h2>
      <ol>
        <li>Any dispute between the Company and a Member shall be resolved through consultation in good faith.</li>
        <li>If consultation fails, dispute mediation may be requested with the Korea Consumer Agency, the Electronic Transactions Dispute Mediation Committee, or similar bodies under applicable law.</li>
        <li>If litigation arises, the court of first instance shall be determined by the Korean Civil Procedure Act.</li>
      </ol>

      <h2>Article 14 (Contact)</h2>
      <ul>
        <li><strong>Operator</strong>: EverydaySummer Inc. / Hongseok Oh</li>
        <li><strong>Email</strong>: contact@everydaysummer.net</li>
        <li><strong>Business registration number</strong>: 847-87-03993</li>
        <li><strong>Address</strong>: 15F-1505, 1808 Nambusunhwan-ro, Gwanak-gu, Seoul, Republic of Korea</li>
      </ul>
      <p>For Service-related questions and refund requests, please email the address above. We will respond within 7 business days.</p>

      <h2>Supplementary provisions</h2>
      <p>These Terms take effect on 2026-04-28.</p>
    </>
  );
}
