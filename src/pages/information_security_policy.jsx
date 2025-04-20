import React from 'react';

function InformationSecurityPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Information Security Policy</h1>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Purpose and Scope</h2>
        <p className="text-sm text-gray-600">
          At GrendSphere, we understand the importance of safeguarding information in the event management industry. Our Information Security Policy ensures the protection of sensitive data related to event planning, client information, and operational processes. This policy provides a framework for:
        </p>
        <ul className="list-disc ml-6 mt-2 text-sm text-gray-600 inline-block text-left">
          <li>Securing client and event-related data</li>
          <li>Protecting GrendSphere's IT infrastructure and systems</li>
          <li>Ensuring the confidentiality of event strategies and plans</li>
          <li>Maintaining the integrity of event schedules and logistics</li>
        </ul>
        <p className="mt-4 text-sm text-gray-600">
          This policy is designed to mitigate risks from internal and external threats, ensuring that all event-related data is handled securely and responsibly.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">1. Policy Statement</h2>
        <p className="text-sm text-gray-600">
          GrendSphere is committed to implementing robust information security measures to protect the confidentiality, integrity, and availability of event-related data. This policy outlines our commitment to safeguarding client information, event plans, and operational processes.
        </p>
        <p className="mt-4 text-sm text-gray-600">
          All employees, contractors, and partners involved in event management activities are required to adhere to this policy to ensure the security of sensitive information.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">2. Background</h2>
        <p className="text-sm text-gray-600">
          As a leading event management company, GrendSphere handles a wide range of sensitive information, including client details, event schedules, and proprietary strategies. This policy has been developed to ensure that all data is managed securely and in compliance with industry standards.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">3. Requirements for Policy</h2>
        <p className="text-sm text-gray-600">
          GrendSphere requires all employees and stakeholders to follow strict guidelines for handling event-related data. This includes:
        </p>
        <ul className="list-disc ml-6 mt-2 text-sm text-gray-600 inline-block text-left">
          <li>Using secure communication channels for sharing event details</li>
          <li>Restricting access to sensitive client and event information</li>
          <li>Ensuring that all digital and physical data is stored securely</li>
          <li>Reporting any security breaches or vulnerabilities immediately</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">4. Objective</h2>
        <p className="text-sm text-gray-600">
          The objective of this policy is to ensure the security of all event-related data and processes. This includes:
        </p>
        <ul className="list-disc ml-6 mt-2 text-sm text-gray-600 inline-block text-left">
          <li>
            <strong>Confidentiality:</strong> Ensuring that client and event information is accessible only to authorized personnel
          </li>
          <li>
            <strong>Integrity:</strong> Maintaining the accuracy and reliability of event schedules, plans, and data
          </li>
          <li>
            <strong>Availability:</strong> Ensuring that event-related information is accessible when needed to support seamless execution
          </li>
        </ul>
      </section>
    </div>
  );
}

export default InformationSecurityPolicy;