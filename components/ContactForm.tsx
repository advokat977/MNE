export default function ContactForm() {
  return (
    <form
      action="https://formsubmit.co/info@mneconsulting.org"
      method="POST"
      aria-describedby="formStatus"
    >
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
      <input type="hidden" name="_captcha" value="false" />

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Name</label>
          <input id="name" name="name" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input id="email" name="email" type="email" required inputMode="email" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium">Company</label>
          <input id="company" name="company" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium">Service of Interest</label>
          <select id="service" name="service" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black">
            <option value="">Select a service</option>
            <option>Due Diligence</option>
            <option>Transaction Execution & Closings</option>
            <option>Concessions & PPP Strategy</option>
            <option>Cross-Border Disputes</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium">Message</label>
          <textarea id="message" name="message" rows={6} required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"></textarea>
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <button type="submit" className="inline-flex items-center justify-center rounded-full bg-accent text-white px-6 py-3">
          Send Inquiry
        </button>
        <div className="text-sm text-subtle">
          Or email <a className="underline hover:no-underline" href="mailto:info@mneconsulting.org">info@mneconsulting.org</a>
          {" "}• LinkedIn <a className="underline hover:no-underline" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">Connect</a>
        </div>
      </div>

      <p id="formStatus" className="sr-only" aria-live="polite"></p>
    </form>
  );
}
