import type { Metadata } from "next";

const SITE_URL = "https://slowkids.net";

export const metadata: Metadata = {
  title: "Privacy Policy | SlowKids",
  description:
    "SlowKids Privacy Policy — items collected and purpose of use, retention period, processors, rights of data subjects, contact for the protection officer.",
  alternates: {
    canonical: `${SITE_URL}/en/privacy`,
    languages: {
      ko: `${SITE_URL}/privacy`,
      en: `${SITE_URL}/en/privacy`,
      "x-default": `${SITE_URL}/privacy`,
    },
  },
  robots: { index: true, follow: true },
};

export default function PrivacyEnPage() {
  return (
    <>
      <h1>SlowKids Privacy Policy</h1>
      <p className="legal-meta"><strong>Effective</strong>: 2026-04-28</p>
      <p className="legal-meta"><strong>Last revised</strong>: 2026-04-28</p>
      <p className="legal-meta" style={{ color: "#8C8070" }}>
        This English version is provided for convenience. In case of any
        discrepancy, the <a href="/privacy">Korean version</a> shall prevail.
      </p>
      <hr className="legal-hr" />

      <p className="legal-intro">
        EverydaySummer Inc. (the &quot;Company&quot;) establishes and discloses
        this Privacy Policy under Article 30 of the Personal Information
        Protection Act of Korea, to protect the personal information of data
        subjects and to address related grievances promptly.
      </p>

      <h2>Article 1 (Purposes of processing personal information)</h2>
      <p>The Company processes personal information for the following purposes. Personal information will not be used for any purpose other than those listed below. If the purpose changes, the Company will take necessary measures such as obtaining separate consent.</p>
      <ol>
        <li><strong>Sign-up and member management</strong>: confirming intent to register, identifying the member, maintaining membership.</li>
        <li><strong>Service provision</strong>: delivering learning content, storing learning records, and displaying statistics.</li>
        <li><strong>Customer support</strong>: responding to inquiries, processing refunds, delivering notices.</li>
        <li><strong>Abuse prevention</strong>: restricting use by members who violate the Terms.</li>
      </ol>

      <h2>Article 2 (Items of personal information processed)</h2>
      <p>The Company processes the following items of personal information.</p>

      <h3>2.1 Collected at sign-up</h3>
      <table>
        <thead>
          <tr><th>Type</th><th>Item</th><th>Method</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Required</td>
            <td><strong>Email address</strong></td>
            <td>Automatically transmitted via OAuth at Kakao or Google sign-in</td>
          </tr>
        </tbody>
      </table>
      <p>Apart from the email address above, <strong>the Company does not directly collect personally identifying information</strong> such as name, date of birth, or phone number.</p>

      <h3>2.2 Collected automatically during use</h3>
      <table>
        <thead>
          <tr><th>Item</th><th>Method</th><th>Note</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>IP address, cookies, access timestamps</td>
            <td>Generated automatically during use</td>
            <td>Abuse prevention</td>
          </tr>
          <tr>
            <td>Device identifiers (OS, app version, device model)</td>
            <td>Collected automatically upon mobile app launch</td>
            <td>Compatibility, debugging</td>
          </tr>
          <tr>
            <td>Learning records (practice results, accuracy, study time)</td>
            <td>Generated during use</td>
            <td>Linked to the member identifier (email)</td>
          </tr>
        </tbody>
      </table>

      <h3>2.3 Payment information (separate)</h3>
      <p>In-app purchases are handled directly by the <strong>Google Play billing system (Android)</strong> or <strong>Apple App Store billing system (iOS)</strong>. The Company does not collect or retain card numbers, account numbers, or other payment-instrument details. The Company only receives and stores <strong>order IDs</strong> and <strong>receipt tokens</strong> issued by each store for payment verification.</p>

      <h2>Article 3 (Processing and retention periods)</h2>
      <p>The Company processes and retains personal information within the retention and use period agreed by the data subject, or within the period required by applicable law.</p>
      <table>
        <thead>
          <tr><th>Item</th><th>Retention period</th><th>Basis</th></tr>
        </thead>
        <tbody>
          <tr><td>Member info (email)</td><td>Until withdrawal of membership</td><td>Data-subject consent</td></tr>
          <tr><td>Learning records</td><td>Until withdrawal of membership</td><td>Service provision</td></tr>
          <tr><td>Abuse records</td><td>1 year</td><td>Abuse prevention</td></tr>
          <tr><td>Payment / refund records</td><td>5 years</td><td>Act on Consumer Protection in Electronic Commerce</td></tr>
          <tr><td>Access logs / IP</td><td>3 months</td><td>Protection of Communications Secrets Act</td></tr>
        </tbody>
      </table>
      <p>Upon withdrawal of membership, all personal information other than the items required to be retained by law above will be <strong>destroyed without delay</strong>.</p>

      <h2>Article 4 (Provision of personal information to third parties)</h2>
      <p>The Company processes personal information only within the purposes stated in Article 1 and does not provide personal information to third parties beyond such purposes without the data subject&apos;s prior consent.</p>
      <p>The following are exceptions:</p>
      <ol>
        <li>where separate consent has been obtained from the data subject;</li>
        <li>where there are special provisions in applicable law;</li>
        <li>where investigative or supervisory authorities request information under lawful procedures.</li>
      </ol>

      <h2>Article 5 (Outsourcing of personal information processing)</h2>
      <p>For smooth service delivery, the Company outsources the processing of personal information as follows.</p>
      <table>
        <thead>
          <tr><th>Processor</th><th>Outsourced task</th><th>Information shared</th></tr>
        </thead>
        <tbody>
          <tr><td>Google LLC</td><td>Cloud infrastructure (server hosting), TTS (speech synthesis), OAuth login</td><td>Email, learning records, TTS request text</td></tr>
          <tr><td>Kakao Corp.</td><td>OAuth login</td><td>Email</td></tr>
          <tr><td>Apple Inc. / Google LLC</td><td>In-app purchase, app distribution</td><td>Payment receipts, order IDs</td></tr>
          <tr><td>Vercel Inc.</td><td>Web hosting</td><td>Access logs, IP</td></tr>
        </tbody>
      </table>
      <p>Under Article 26 of the Personal Information Protection Act, the Company specifies in its outsourcing agreements the prohibition of processing personal information beyond the purpose, technical and managerial safeguards, restrictions on subcontracting, and supervision of processors, and monitors whether processors handle personal information safely.</p>

      <h2>Article 6 (Rights and obligations of the data subject and the legal guardian)</h2>
      <ol>
        <li>
          The data subject may exercise the following rights with respect to the Company at any time:
          <ul>
            <li>request to view personal information;</li>
            <li>request to correct errors;</li>
            <li>request to delete;</li>
            <li>request to suspend processing.</li>
          </ul>
        </li>
        <li>Such rights may be exercised by written request or email, and the Company will respond without delay.</li>
        <li><strong>Personal information of children under 14</strong>: Sign-up and payment for children under 14 require the <strong>consent of the legal guardian</strong>. The legal guardian has the right to request to view, correct, delete, or suspend the processing of the child&apos;s personal information.</li>
      </ol>

      <h2>Article 7 (Destruction of personal information)</h2>
      <ol>
        <li>When personal information becomes unnecessary due to expiration of the retention period or achievement of the purpose, the Company destroys it without delay.</li>
        <li><strong>Procedure</strong>: Upon withdrawal of membership or expiration of the retention period, destruction is performed automatically or by the responsible staff.</li>
        <li>
          <strong>Methods</strong>:
          <ul>
            <li>Electronic files: permanently deleted in a manner that prevents recovery or reproduction.</li>
            <li>Paper documents: shredded or incinerated.</li>
          </ul>
        </li>
      </ol>

      <h2>Article 8 (Measures to ensure the security of personal information)</h2>
      <p>The Company implements the following measures to ensure the security of personal information.</p>
      <ol>
        <li><strong>Administrative</strong>: minimisation and training of personal-information handlers.</li>
        <li><strong>Technical</strong>: encryption of passwords and access logs, security software, HTTPS communication.</li>
        <li><strong>Physical</strong>: access controls for data centres and storage rooms.</li>
      </ol>

      <h2>Article 9 (Installation, operation, and refusal of automatic data-collection devices)</h2>
      <ol>
        <li>The Company uses cookies and local storage to provide tailored services to Members.</li>
        <li><strong>Purpose</strong>: to maintain login state, to save learning progress, and to analyse service usage.</li>
        <li><strong>How to refuse</strong>: cookies may be disabled in the browser&apos;s settings. Note that disabling cookies may restrict features such as login persistence and saving of learning records.</li>
      </ol>

      <h2>Article 10 (Personal Information Protection Officer)</h2>
      <p>The Company designates the following officer to take overall responsibility for processing personal information and to handle complaints and remedies of data subjects.</p>
      <ul>
        <li><strong>Personal Information Protection Officer</strong>: Hongseok Oh</li>
        <li><strong>Email</strong>: contact@everydaysummer.net</li>
      </ul>
      <p>Data subjects may direct all inquiries, complaints, and remedy requests relating to personal information that arise while using the Service to the contact above. The Company will respond and process such inquiries without delay.</p>

      <h2>Article 11 (Remedies for infringement of rights)</h2>
      <p>To obtain remedy for personal-information infringement, data subjects may apply for dispute resolution or counselling to the agencies below.</p>
      <ul>
        <li><strong>Personal Information Dispute Mediation Committee</strong>: 1833-6972 (no area code) / www.kopico.go.kr</li>
        <li><strong>Korea Internet &amp; Security Agency — Privacy Infringement Report Center</strong>: 118 (no area code) / privacy.kisa.or.kr</li>
        <li><strong>Supreme Prosecutors&apos; Office</strong>: 1301 (no area code) / www.spo.go.kr</li>
        <li><strong>National Police Agency</strong>: 182 (no area code) / ecrm.cyber.go.kr</li>
      </ul>

      <h2>Article 12 (Changes to this Privacy Policy)</h2>
      <p>This Privacy Policy is effective from its effective date. If there are additions, deletions, or corrections under applicable law or policy, the Company will announce such changes via in-service notices at least 7 days before the effective date. For changes that materially affect the data subject&apos;s rights, notice will be given at least 30 days in advance, and Members will be separately notified by email or app push.</p>

      <h2>Supplementary provisions</h2>
      <p>This Privacy Policy takes effect on 2026-04-28.</p>

      <div className="legal-footer">
        <p><strong>Operator</strong>: EverydaySummer Inc. / Hongseok Oh</p>
        <p><strong>Email</strong>: contact@everydaysummer.net</p>
        <p><strong>Business registration number</strong>: 847-87-03993</p>
        <p><strong>Address</strong>: 15F-1505, 1808 Nambusunhwan-ro, Gwanak-gu, Seoul, Republic of Korea</p>
      </div>
    </>
  );
}
