import Divider from "./divider";

interface TermsProps {

}

export const Terms = ({ }: TermsProps) => {
  return (
    <div className="">
      <Divider title={"Terms and Conditions"} />
      <div className="gap-4 flex flex-col">
        <form action="/submitted" method="POST">
          <label>
            Please list specific difficulties you would like support for:
            <p className="mt-1 whitespace-pre-line w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm">
              {termsAndConditions}
            </p>
          </label>
          <div className="mt-1 grid grid-cols-12 w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none  sm:text-sm">
            <p className="col-span-10">
              I have read and agree to Mustard Seed's Terms and Conditions
            </p>
            <input
              required
              type="checkbox"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
          "/>
          </div>
          <label>
            Privacy Notice:
            <p className="mt-1 whitespace-pre-line w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm">
              {privacyNotice}
            </p>
          </label>
          <button
            type="submit"
            className="mt-6 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>

  )
}




const termsAndConditions = `Referral Process: Your referral requires completion of the consent form above and agreement to our terms and conditions.

NB: It is your responsibility to inform anyone else who has parental responsibility for your child about this referral to Mustard Seed and to inform us directly if your intention is that you would like them to be involved in the process.

Sessions: A parent/carer is expected to be present either in the room or on site for the duration of each session (determined by the type of intervention).

Accepting Appointments: We will offer you a set day and time for work with your child. Our sessions run for up to one hour and may be delivered weekly, fortnightly or monthly, depending on the type of intervention.  We will offer a second opportunity if you decline an appointment but If you decline two appointments we will unfortunately be unable to offer further support due to the very high demand for the service. 

Cancelling sessions: If your child cannot make a session, please let us know as soon as possible. If our staff member is unwell, you will be notified as soon as possible and we will reschedule the appointment.

We ask parents to be punctual as we have appointments throughout the day.

Documentation: All documentation will be treated as confidential and is stored securely in our Google Drive in accordance with current GDPR regulations. A copy of our GDPR Privacy Notice can be found at the end of this form and on our website. 

We will produce a short summary of work and recommendations following each intervention. 

Insurance: All professional staff are insured either with Balen's Insurance Ltd or their professional bodies.

Disclosure and Barring Scheme: All our therapists, staff and volunteers hold an Enhanced DBS.

Training: All staff are trained and experienced in working with autistic children. All volunteers complete our 10 week induction training programme. The whole team attend annual safeguarding training.

Therapists: All Occupational Therapists that work for Mustard Seed are HCPC registered and hold registered qualifications from the Royal College of Occupational Therapists,  hold Enhanced DBS certification, and hold professional membership with specialist sectors such as CYPF or SI Network. `


const privacyNotice = ` Mustard Seed Autism Trust

GDPR Privacy Notice For Families (How we use your Information)

Please read the following privacy information:



Mustard Seed Autism Trust is a registered charity: 1202378                                                                    Main Address: Odiham Cottage Hospital, Buryfields, Odiham, RG29 1NE

If you want further information about Data Protection please contact Francis Bland  francis@mustardseedautism.co.uk 

Why do we process your child’s information?

The data we hold is used to process information about the children who receive our occupational therapy services and all other services provided by Mustard Seed Autism Trust.

What is the lawful basis for the processing your information?

We gain parents or guardians consent for us to use data about their children through this consent form.

The children’s’ data is required for us to deliver appropriate services to them, without which we would not be able to assess or treat or support their needs.

What information on your child do we obtain?

All data obtained about the children we deliver services to is either provided by: parents or guardians, County Councils or NHS, third parties where the parents or guardians have consented for the exchange of data for the benefit of treating their children.

Who might get to see the personal date held? 

The recipients of personal data are the parents or guardians of the children we treat, County Councils, NHS and any other parties we are authorised by the parent/guardian to share this data with.

How long is the personal data kept for?

Due to the assessments we complete and the developmental and medical information we are collecting we are legally required to keep paper-based and electronic data until the child’s 25th birthday.

What are my rights in regard to the processing of this information?

Parents or guardians have a right to access data held about their child. This will be provided electronically in one or more ‘zip’ files within one month of a request being made.

The right to withdraw consent:

The “right to be forgotten” policy does not apply to children’s data under HCPC legislation even where they cease to be a client. Data must be retained until the child’s 25th birthday.

The right to lodge a complaint with a supervisory authority:

Parents or guardians are entitled to lodge a complaint with the ICO (ico.org.uk) if they perceive data held about their children has not been managed according to GDPR.`