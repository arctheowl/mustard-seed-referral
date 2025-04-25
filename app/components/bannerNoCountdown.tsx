import Link from "next/link";

const BannerNoCountdown = () => {
  return (
    <div className="rounded text-center bg-green-400 text-black p-4 h-1/2 top-48">
      <div className="w-1/2 center mx-auto">
        <h1 className="text-xl">
          Unfortunately you have been unsuccessful in obtaining a place. If you
          have previously not been added to our waitlist then feel free to enter
          your details below to be added to our waitlist.
          <p className="py-10">
            {" "}
            Alternatively you are welcome to visit our website at{" "}
            <Link
              className="text-blue-600 hover:underline"
              target="_blank"
              href={"https://mustardseedautism.co.uk/"}
            >
              mustardseedautism.co.uk
            </Link>{" "}
            for resources and future events.
          </p>
          If you would be interested in paid for support you could also visit
          branches at{" "}
          <Link
            className="text-blue-600 hover:underline"
            target="_blank"
            href={"https://mustardseedautism.co.uk/branches/"}
          >
            Branches
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default BannerNoCountdown;
