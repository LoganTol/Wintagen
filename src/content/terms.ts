import type { LegalSection } from "@/components/site/LegalPage";

export const TERMS_INTRO =
  "These Terms of Service govern the Wintagen company website and business-to-business custom development services. They are not a substitute for a signed project agreement: for project work, the signed statement of work controls scope, deliverables, schedule, and pricing.";

export const TERMS_SECTIONS: LegalSection[] = [
  {
    number: "1",
    title: "Parties and acceptance",
    blocks: [
      {
        type: "paragraph",
        text: 'These Terms govern the website at wintagen.com and services expressly ordered from Wintagen ("Wintagen," "we," "us"). "You" means the person or entity accepting them. Effective date: September 20, 2026. Where you accept for an organization, you represent that you have authority to bind it. If you lack that authority, do not place an order on its behalf.',
      },
      { type: "subheading", text: "Agreement formation" },
      {
        type: "paragraph",
        text: "These Terms become binding when you affirmatively accept them through a clearly identified acceptance process or enter into an agreement that expressly incorporates them. An inquiry, exploratory call, or receipt of a proposal does not by itself require Wintagen to perform services or require you to buy them. Any use that does not create a contract remains subject to applicable law.",
      },
    ],
  },
  {
    number: "2",
    title: "Other documents and precedence",
    blocks: [
      {
        type: "paragraph",
        text: "A signed master services agreement governs over inconsistent general terms. An executed statement of work (SOW) controls the project's scope, deliverables, schedule, pricing, and express project exceptions. A data processing agreement controls conflicting provisions about processing personal information on a client's behalf. Third-party and open-source licenses control the applicable third-party components. A purchase order or email does not amend these Terms unless the parties expressly agree in writing.",
      },
    ],
  },
  {
    number: "3",
    title: "Eligibility and accounts",
    blocks: [
      {
        type: "paragraph",
        text: "The website and business services are intended for people legally able to contract. You must be at least 18 and have legal capacity, or the higher age required by applicable law, to order services. If an account is offered, supply accurate information, protect credentials, limit access to authorized users, and promptly report suspected compromise. Responsibility for account activity does not extend beyond what applicable law permits.",
      },
    ],
  },
  {
    number: "4",
    title: "Website permission and restrictions",
    blocks: [
      {
        type: "paragraph",
        text: "You may use the website for lawful evaluation and communication with Wintagen. Do not infringe rights; impersonate others; submit malicious code; bypass access controls; interfere with systems; harvest personal information without authority; or perform unauthorized security testing. Restrictions do not prohibit activity protected by nonwaivable law. Written permission is required before accessing nonpublic systems or conducting a security test.",
      },
    ],
  },
  {
    number: "5",
    title: "Scope and deliverables",
    blocks: [
      {
        type: "paragraph",
        text: "Services begin only after the parties agree to an SOW or other written order and any specified start conditions are satisfied. The SOW identifies deliverables, supported platforms, functionality, exclusions, milestones, responsibilities, assumptions, and fees. Examples, mockups, estimates, proposals, and portfolio work are illustrative unless expressly made part of an agreed deliverable.",
      },
    ],
  },
  {
    number: "6",
    title: "Client responsibilities",
    blocks: [
      {
        type: "paragraph",
        text: "You will supply accurate requirements, authorized content, timely decisions, necessary access, and a designated contact. You are responsible for the legality and accuracy of materials you provide and for obtaining required permissions. Use approved access-sharing methods rather than sending passwords through ordinary messages. Notify us of regulated data, accessibility requirements, security standards, and other special constraints before scope is agreed.",
      },
    ],
  },
  {
    number: "7",
    title: "Changes and dependencies",
    blocks: [
      {
        type: "paragraph",
        text: "Requests outside agreed scope require a written change order stating the revised work, fees, schedule, and acceptance criteria. Neither party is required to perform a change before agreement. Schedule estimates depend on timely inputs and third-party availability. We will communicate material delays and their expected impact. A delay does not create additional fees unless the parties agree to them or the SOW expressly provides a lawful mechanism.",
      },
    ],
  },
  {
    number: "8",
    title: "Review and acceptance",
    blocks: [
      {
        type: "paragraph",
        text: "The SOW will state objective acceptance criteria and a review period of 10 business days unless otherwise agreed. Within that period, identify material nonconformities in writing with sufficient detail to reproduce them. We will address in-scope nonconformities and resubmit for review. Preferences or new requirements are change requests. Acceptance occurs through written confirmation or another expressly agreed, lawful process; silence alone does not constitute acceptance.",
      },
    ],
  },
  {
    number: "9",
    title: "Support and ongoing operations",
    blocks: [
      {
        type: "paragraph",
        text: "Hosting, domain management, monitoring, backups, maintenance, security updates, content entry, training, and ongoing support are included only if expressly listed. The agreement will identify account ownership, renewal responsibility, response commitments, backup and restore duties, and any support end date. Third-party outages and changes may affect delivery; notify each other promptly and cooperate on reasonable mitigation.",
      },
    ],
  },
  {
    number: "10",
    title: "Third-party and AI tools",
    blocks: [
      {
        type: "paragraph",
        text: "Third-party services may require your own account and terms. We will identify material recurring dependencies and separately chargeable components before approval. Use of AI-assisted tools does not eliminate review obligations or guarantee output accuracy, exclusivity, or protectability. Client confidential information or personal information may be used with such tools only as authorized by the agreement and applicable privacy obligations.",
      },
    ],
  },
  {
    number: "11",
    title: "Fees and invoices",
    blocks: [
      {
        type: "paragraph",
        text: "Fees, currency, pricing basis, milestones, invoice due dates, and authorized expenses are specified in the SOW. Time-based work identifies rates, recording practices, and any cap or estimate. Taxes legally chargeable to the client are additional unless expressly included; taxes on Wintagen's income remain Wintagen's responsibility. We will not add unstated mandatory charges after agreement.",
      },
      { type: "subheading", text: "Deposits and disputed amounts" },
      {
        type: "paragraph",
        text: "Deposit amounts and how they are applied or refunded are stated in the SOW. A deposit is not automatically nonrefundable. Notify us promptly of a good-faith invoice dispute, identifying the amount and basis; pay undisputed amounts when due. The parties will work reasonably to resolve disputes. No late fee or collection charge applies unless expressly agreed and permitted by law.",
      },
    ],
  },
  {
    number: "12",
    title: "Renewals and recurring services",
    blocks: [
      {
        type: "paragraph",
        text: "A project purchase does not authorize automatic subscription renewals. Any recurring service requires a separate clear order describing price, frequency, renewal, cancellation, and applicable notice or consent requirements.",
      },
    ],
  },
  {
    number: "13",
    title: "Suspension",
    blocks: [
      {
        type: "paragraph",
        text: "We may suspend affected services for a material security risk, unlawful use, or material nonpayment, subject to the agreement and applicable law. Except where immediate action is necessary, we will give written notice describing the issue and a reasonable opportunity to cure of at least 10 business days. Suspension will be proportionate. We will coordinate restoration when the issue is resolved and will not use suspension to prevent exercise of nonwaivable rights.",
      },
    ],
  },
  {
    number: "14",
    title: "Termination and cancellation",
    blocks: [
      {
        type: "paragraph",
        text: "Either party may terminate for a material breach not cured within 30 days after written notice, or where continued performance is unlawful. A project agreement may specify additional termination rights. Website access may be discontinued for a material violation, but access termination does not cancel existing payment, delivery, or data duties.",
      },
      { type: "subheading", text: "Financial consequences and handoff" },
      {
        type: "paragraph",
        text: "On termination, you pay for authorized work properly performed and approved noncancelable commitments, subject to your legal rights and the agreement. We reconcile prepaid amounts and refund any balance due within 30 days. The SOW will define delivery of paid work, work-in-progress rights, access transfer, and transition assistance. We return or delete client data as agreed and legally required, retaining only permitted records.",
      },
    ],
  },
  {
    number: "15",
    title: "Client materials",
    blocks: [
      {
        type: "paragraph",
        text: "You retain ownership of content, data, trademarks, and other materials you provide. You grant Wintagen a limited license to use, reproduce, adapt, and share them with authorized personnel and providers only as necessary to perform the engagement and meet agreed obligations. You confirm that you have the rights and permissions required for that use. This is not a license for unrelated marketing or model training.",
      },
    ],
  },
  {
    number: "16",
    title: "Custom deliverables",
    blocks: [
      {
        type: "paragraph",
        text: "After full payment for the relevant deliverables, Wintagen assigns to you its transferable intellectual property rights in custom deliverables specifically created for you under the applicable SOW, excluding background materials and third-party components. Until transfer, you have only the evaluation or use rights expressly granted. The SOW will identify deliverables, source files, design files, exclusions, and any special assignment formalities.",
      },
      { type: "subheading", text: "Background materials and third-party components" },
      {
        type: "paragraph",
        text: "Wintagen retains pre-existing or independently developed tools, reusable components, methods, and know-how. To the extent such background materials are incorporated into a paid deliverable, you receive a perpetual, worldwide, nonexclusive license to use, reproduce, modify, and distribute them as part of that deliverable to the extent necessary for its intended use, subject to any agreed limits. Third-party and open-source components remain subject to their licenses and cannot be assigned as Wintagen-owned work.",
      },
    ],
  },
  {
    number: "17",
    title: "Website content and publicity",
    blocks: [
      {
        type: "paragraph",
        text: "Wintagen or its licensors own the website's content, branding, and other protected materials. No ownership is transferred merely by visiting the site. We will obtain your written permission before publicly using your name, logo, confidential project details, or nonpublic deliverables in case studies or marketing. Any feedback license must be separately agreed; submission does not transfer your confidential information or ownership of unrelated ideas.",
      },
    ],
  },
  {
    number: "18",
    title: "Confidentiality",
    blocks: [
      {
        type: "paragraph",
        text: "Each party will protect nonpublic information identified as confidential or reasonably understood to be confidential, use it only for the engagement, and disclose it only to personnel or providers who need access and have appropriate duties. Exclusions include information lawfully public, already known without restriction, independently developed, or lawfully obtained from another source. Required legal disclosure is permitted with advance notice when lawful and reasonable assistance to seek protection.",
      },
      { type: "subheading", text: "Duration and return" },
      {
        type: "paragraph",
        text: "Confidentiality applies for 3 years after disclosure or termination, with trade secrets protected for as long as legally qualifying. On request or termination, each party will return or destroy confidential information as agreed, subject to lawful retention and protected backups. Confidentiality duties continue for retained information. A signed NDA may provide different or stronger requirements.",
      },
    ],
  },
  {
    number: "19",
    title: "Personal information and client systems",
    blocks: [
      {
        type: "paragraph",
        text: "The Privacy Policy describes our own processing. For personal information handled for a client, the parties must agree on appropriate processing terms, instructions, security, subprocessors, incident cooperation, rights-request assistance, retention, and international transfers. You remain responsible for a lawful basis and required notices for data you instruct us to process. Do not provide regulated or unusually sensitive data until the necessary scope and safeguards are agreed.",
      },
    ],
  },
  {
    number: "20",
    title: "Service commitments",
    blocks: [
      {
        type: "paragraph",
        text: "We will perform agreed professional services with reasonable care and skill. Report material failure to meet agreed specifications through the acceptance or support process. The SOW will define correction obligations, warranty duration, exclusions, and any remedies. There is no promise of particular revenue, conversion, search ranking, investment return, uninterrupted operation, or compatibility beyond agreed requirements.",
      },
      { type: "subheading", text: "Website and third-party disclaimers" },
      {
        type: "paragraph",
        text: "To the extent permitted by law, general website information is provided as available without an additional warranty of completeness, fitness for a particular purpose, or uninterrupted access. Third-party services are governed by their providers' commitments. These disclaimers do not override express written promises, the reasonable-care commitment above, or warranties and remedies that cannot lawfully be excluded.",
      },
    ],
  },
  {
    number: "21",
    title: "Limitation of liability",
    blocks: [
      {
        type: "paragraph",
        text: "Except for excluded claims, neither party is liable for indirect or consequential loss, lost profits, or lost business opportunities arising from the agreement, to the extent permitted by law. The aggregate cap for ordinary service claims is the fees paid or payable under the affected SOW during the 12 months preceding the event giving rise to the claim.",
      },
      { type: "subheading", text: "Excluded claims and mandatory protections" },
      {
        type: "paragraph",
        text: "These limitations do not apply to fraud, willful misconduct, amounts properly owed, or liability that cannot be limited by law. Mandatory consumer protections, personal injury rules, and other nonwaivable rights prevail.",
      },
    ],
  },
  {
    number: "22",
    title: "Third-party claims",
    blocks: [
      {
        type: "paragraph",
        text: "No blanket indemnity is imposed by these Terms. Where needed, a signed agreement will define responsibility for third-party intellectual-property claims about custom work or client materials, exclusions, prompt notice, defense control, cooperation, settlement consent, and the relation to liability caps. Remedies may include obtaining rights, replacing or modifying an affected component, or a defined refund.",
      },
    ],
  },
  {
    number: "23",
    title: "Informal resolution and governing law",
    blocks: [
      {
        type: "paragraph",
        text: "Before filing a claim, the parties will try in good faith to resolve the dispute through their designated contacts; reach us at contact@wintagen.com. This process does not prevent urgent relief, regulator complaints, or preserve a deadline that applicable law requires you to meet. The agreement is governed by the laws of the State of Delaware, subject to mandatory law that cannot be displaced by contract. Venue is the state and federal courts located in Delaware, except where mandatory law gives another forum.",
      },
      { type: "subheading", text: "No arbitration or class waiver" },
      {
        type: "paragraph",
        text: "These Terms do not impose mandatory arbitration, a class-action waiver, or a contractual shortening of statutory limitation periods. Consumers retain any mandatory rights to local remedies, cancellation, or dispute procedures.",
      },
    ],
  },
  {
    number: "24",
    title: "Force majeure",
    blocks: [
      {
        type: "paragraph",
        text: "Neither party is responsible for delay caused by events reasonably beyond its control, excluding obligations that law or the agreement requires it to perform despite the event. The affected party will notify the other and take reasonable mitigation steps. This provision does not excuse avoidable security failures or payment for services already properly performed.",
      },
    ],
  },
  {
    number: "25",
    title: "Notices and changes",
    blocks: [
      {
        type: "paragraph",
        text: "Send contractual notices to Wintagen at contact@wintagen.com, and to the client contact in the SOW. Updates to website terms apply prospectively through an appropriate notice and acceptance process. Existing signed engagements remain governed by their accepted version unless the parties agree to an amendment or law requires a change.",
      },
    ],
  },
  {
    number: "26",
    title: "Relationship and assignment",
    blocks: [
      {
        type: "paragraph",
        text: "The parties are independent contractors. Neither may bind the other without authorization. Subcontracting does not remove Wintagen's agreed responsibility and must follow confidentiality and data-processing obligations. Assignment requires the other party's written consent, except that either party may assign in connection with a merger, financing, acquisition, or sale of substantially all assets, subject to law; assignment must not materially reduce agreed protections without the other party's consent where required.",
      },
    ],
  },
  {
    number: "27",
    title: "Entire agreement and survival",
    blocks: [
      {
        type: "paragraph",
        text: "The accepted Terms and incorporated documents constitute the agreement for their subject matter. If a provision is unenforceable, the remaining provisions continue to the extent lawful; any replacement must reflect lawful intent. A waiver of one breach is not a waiver of another. Ownership, accrued payment duties, confidentiality, data obligations, permitted limitations, and dispute provisions survive to the extent their purpose requires. Contact: Wintagen, contact@wintagen.com.",
      },
    ],
  },
];
