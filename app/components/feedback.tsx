import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { XCircleIcon } from '@heroicons/react/20/solid'
import { InformationCircleIcon } from '@heroicons/react/20/solid'

interface IFeedback {
  show: boolean
  setShow: (show: boolean) => void
  message: string
}

export function Success({ message, show, setShow }: IFeedback) {
  return (
    <div className={`rounded-md bg-green-50 p-4 sticky top-0 z-50 ${show ? '' : 'hidden'}`}>
      <div className="flex">
        <div className="shrink-0">
          <CheckCircleIcon aria-hidden="true" className="size-5 text-green-400" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-green-800">Success!</h3>
          <div className="mt-2 text-sm text-green-700">
            <p>{message}</p>
          </div>
          <div className="mt-4">
            <div className="-mx-2 -my-1.5 flex">
              <button
                type="button"
                className="rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50 focus:outline-hidden"
              >
                View status
              </button>
              <button
                type="button"
                onClick={() => setShow(false)}
                className="ml-3 rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50 focus:outline-hidden"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Error({ message, show, setShow }: IFeedback) {
  return (
    <div className="rounded-md bg-red-50 p-4 sticky top-0 z-50">
      <div className="flex">
        <div className="shrink-0">
          <XCircleIcon aria-hidden="true" className="size-5 text-red-400" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">There was an Error with this action</h3>
          <div className="mt-2 text-sm text-red-700">
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Information() {
  return (
    <div className="rounded-md bg-blue-50 p-4 sticky top-0 z-50">
      <div className="flex">
        <div className="shrink-0">
          <InformationCircleIcon aria-hidden="true" className="size-5 text-blue-400" />
        </div>
        <div className="ml-3 flex-1 md:flex md:justify-between">
          <p className="text-sm text-blue-700">A new software update is available. See what’s new in version 2.0.4.</p>
          <p className="mt-3 text-sm md:mt-0 md:ml-6">
            <a href="#" className="font-medium whitespace-nowrap text-blue-700 hover:text-blue-600">
              Details
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
