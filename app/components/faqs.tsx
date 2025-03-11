import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const ConstFAQs = [
  {
    question: "Is team pricing available?",
    answer:
      "Yes! You can purchase a license that you can share with your entire team.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes! You can try out our software for 30 days, no credit card required.",
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Yes! You can cancel your subscription at any time.",
  },
  {
    question: "Can I change plans?",
    answer: "Yes! You can change plans at any time.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes! You can get a full refund within 30 days of your purchase.",
  },
];

function FAQs() {
  return (
    <div className="flex flex-col items-center space-y-4 text-black pt-24">
      {ConstFAQs.map((faq, index) => (
        <Disclosure as="div" className="w-full max-w-md" key={index}>
          <DisclosureButton className="group w-full border-b pb-2 text-left">
            {faq.question}
            <ChevronDownIcon className="w-5 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <div className="overflow-hidden py-2">
            <DisclosurePanel
              transition
              className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
            >
              {faq.answer}
            </DisclosurePanel>
          </div>
        </Disclosure>
      ))}
    </div>
  );
}
export default FAQs;
