const ConstFAQs = [
  {
    id: 1,
    question: "When Will I hear back from you?",
    answer:
      "The Mustard Seed Autism team will aim to confirm you appilication by the end of day Friday. If you have not heard from us by then, please check your spam folder. The team will then allocate places and you will find out if you are successful after two weeks.",
  },
  {
    id: 2,
    question: "Is there a paid for service available?",
    answer: `Yes! You can find out more about our paid for service by visiting Branches. Click the link below to find out more.`,
    link: "https://mustardseedautism.co.uk/branches/",
  },
  {
    id: 3,
    question: "What Information do I need to provide?",
    answer:
      "You will need to provide your name, email address and the name of your child. You will also need to provide a brief description of your child's needs and any other relevant information.",
  },
  {
    id: 4,
    question: "What happens if I don't get a space?",
    answer:
      "If you don't get a space, you will be added to the waitlist and we will contact you if a space becomes available. Alternatively you can look at our paid Occupational Therapy services, Branches.",
  },
];

export default function FAQs2() {
  return (
    <div className="bg-slate-200 w-5/6 col-span-2">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Frequently asked questions
        </h2>
        <dl className="mt-20 divide-y divide-gray-900/10">
          {ConstFAQs.map((faq) => (
            <div
              key={faq.id}
              className="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8"
            >
              <dt className="text-base/7 font-semibold text-gray-900 lg:col-span-5">
                {faq.question}
              </dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <p className="text-base/7 text-gray-600">{faq.answer}</p>
                {faq.link && (
                  <a
                    href={faq.link}
                    target="_blank"
                    className="text-blue-500 hover:underline"
                  >
                    Learn more
                  </a>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
