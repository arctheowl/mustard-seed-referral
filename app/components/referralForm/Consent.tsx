import Divider from "./divider";

interface ConsentInfoProps {

}

export const ConsentInfo = ({ }: ConsentInfoProps) => {
  return (
    <div className="">
      <Divider title={"Consent"} />
      <div className="gap-4 flex flex-col">
        <label>
          Please list specific difficulties you would like support for:
          <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm
          ">
            Mustard Seed Autism Trust would like your consent to retain your details on our secure database. This information is held confidentially and only staff who need to access it will be able to do so. By law we need to keep children's therapy records until they are 25 years old. Sometimes it is helpful to share information and reports with other professionals outside our organisation. Information is only shared with other professionals with your consent. Further information on our Privacy Policy can be found at the end of this form. If you would like to read the full policy please email  office@mustardseedautism.co.uk
          </p>

        </label>

        <div className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm
          ">
          <p>
            We only take photos or videos of sessions with your consent and the child's agreement. These are always used anonymously and you can opt out any time. Please indicate which of the following you give consent for:
          </p>
          <div className="mt-1 grid grid-cols-2 w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none  sm:text-sm">
            <p className="">
              Therapy intervention and evaluation
            </p>
            <input
              type="checkbox"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
          "/>

          </div>
          <div className="mt-1 grid grid-cols-2 w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none  sm:text-sm">
            <p className="">
              Therapy intervention and evaluation
            </p>
            <input
              type="checkbox"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
          "/>
          </div>
          <div className="mt-1 grid grid-cols-2 w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none  sm:text-sm">
            <p className="">
              Reports for funders and annual report
            </p>
            <input
              type="checkbox"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
          "/>
          </div>
          <div className="mt-1 grid grid-cols-2 w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none  sm:text-sm">
            <p className="">
              In our termly newsletter for supporters
            </p>
            <input
              type="checkbox"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
          "/>
          </div>
          <div className="mt-1 grid grid-cols-2 w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none  sm:text-sm">
            <p className="">
              On Mustard Seed's social media
            </p>
            <input
              type="checkbox"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
          "/>
          </div>
          <div className="mt-1 grid grid-cols-2 w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none  sm:text-sm">
            <p className="">
              On Mustard Seed's website
            </p>
            <input
              type="checkbox"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
          "/>
          </div>
          <div className="mt-1 grid grid-cols-2 w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none  sm:text-sm">
            <p className="">
              In our leaflet or other promotional material
            </p>
            <input
              type="checkbox"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
          "/>
          </div>
          <div className="mt-1 grid grid-cols-2 w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none  sm:text-sm">
            <p className="">
              None of the above
            </p>
            <input
              type="checkbox"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
          "/>
          </div>
        </div>

        <label className="text-lg font-medium text-gray-700 mt-4">
          <p className="">
            We would like your consent for the following:
          </p>
          <div className="mt-1 grid grid-cols-2 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm">
            <p className="">
              Consent to retain your information
            </p>
            <input
              type="checkbox"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
          "/>
          </div>
          <div className="mt-1 grid grid-cols-2 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm">
            <p className="">
              Consent to share your information
            </p>
            <input
              type="checkbox"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
          "/>
          </div>
          <div className="mt-1 grid grid-cols-2 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm">
            <p className="">
              I do not give consent
            </p>
            <input
              type="checkbox"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
          "/>
          </div>
        </label>
      </div>
    </div>

  )
}