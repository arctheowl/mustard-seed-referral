"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";
import {
  getCountDownTime,
  getReferrals,
  getRemainingTickets,
  getWaitlist,
} from "../../actions";
import Modal from "../../components/modal";
import WaitlistModal from "@/app/components/waitlistModal";

const statuses = {
  Completed: "text-green-700 bg-green-400/20",
  Error: "text-rose-400 bg-rose-400/10",
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface IWaitlistData {
  id: string;
  name: string;
  eligibility: boolean;
  email: string;
  childName: string;
  childDOB: Date;
}

// function exportUserInfo(data: any) {
const convertToCSV = (objArray: any) => {
  const array = typeof objArray !== "object" ? JSON.parse(objArray) : objArray;
  let str =
    "id,name,email,second_email,signposted,child_name,child_dob,parent_name,sibling_names,sibling_ages,address,phone,school_name,school_year,diagnosis,diagnosis_date,medication,professionals,eligibility\r\n";

  for (let i = 0; i < array.length; i++) {
    let line = "";
    for (let index in array[i]) {
      if (line !== "") line += ",";

      line += array[i][index];
    }
    str += line + "\r\n";
  }
  return str;
};

const downloadCSV = (data: any) => {
  const csvData = new Blob([convertToCSV(data)], { type: "text/csv" });
  const csvURL = URL.createObjectURL(csvData);
  const link = document.createElement("a");
  link.href = csvURL;
  link.download = `waitlist_export.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function Dashboard() {
  const [data, setData] = useState<IWaitlistData[]>([]);
  const [stats, setStats] = useState<any[]>([]);
  const [timeLive, setTimeLive] = useState<any>();
  const [modalOpen, setModalOpen] = useState(false);
  const [userInfo, setUserInfo] = useState<IWaitlistData>();
  const currentTime = new Date().getTime();
  useEffect(() => {
    let countDownTimer = "";
    let serverTickets = "";
    getRemainingTickets().then((data: any) => {
      serverTickets = data[0].ticket_number;
    });
    getCountDownTime().then((data: any) => {
      countDownTimer = data[0]?.time.toString();
    });

    getWaitlist().then((data: any) => {
      setData(data);
      setStats([
        {
          name: "Number of Referrals",
          value: data.length.toString(),
        },
        {
          name: "Count Down Timer",
          value: format(countDownTimer, "HH:mm:ss dd-MM-yyyy"),
        },
        {
          name: "Remaing Referrals",
          value: serverTickets,
        },
        {
          name: "Time Live",
          value: timeLive ? timeLive : "Not Live",
          unit: timeLive ? "mins" : "",
        },
      ]);
    });
  }, []);

  const handleInfoClick = (user: IWaitlistData) => {
    setUserInfo(user);
    setModalOpen(!modalOpen);
  };

  return (
    <>
      {modalOpen ? (
        <WaitlistModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          userInfo={userInfo}
        ></WaitlistModal>
      ) : null}
      {/* Activity list */}
      <div className="border-t border-black pt-11">
        <div className="flex items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
          <h2 className="px-4 text-base/7 font-semibold text-black sm:px-6 lg:px-8">
            Latest activity
          </h2>
          <button
            onClick={() => {
              downloadCSV(data);
            }}
            className="order-first flex-none rounded-full bg-green-500 px-2 py-1 text-xs font-medium text-black ring-1 ring-inset ring-indigo-400/30 sm:order-none sm:px-4 lg:px-6 hover:bg-green-600"
          >
            Export
          </button>
        </div>

        <table className="mt-6 w-full whitespace-nowrap text-left">
          <colgroup>
            <col className="lg:w-1/12" />
            <col className="w-full sm:w-4/12" />
            <col className="lg:w-3/12" />
            <col className="lg:w-1/12" />
            <col className="lg:w-1/12" />
          </colgroup>
          <thead className="border-b border-black text-sm/6 text-black">
            <tr>
              <th
                scope="col"
                className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8"
              >
                Info
              </th>
              <th
                scope="col"
                className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8"
              >
                Parent/Guardian Name
              </th>
              <th
                scope="col"
                className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell"
              >
                Email
              </th>
              <th
                scope="col"
                className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell"
              >
                Postcode
              </th>
              <th
                scope="col"
                className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell"
              >
                Child DOB
              </th>
              <th
                scope="col"
                className="py-2 pl-0 pr-4 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20"
              >
                Eligibility
              </th>
              <th
                scope="col"
                className="hidden py-2 pl-0 pr-4 text-center font-semibold sm:table-cell sm:pr-6 lg:pr-8 "
              >
                ID
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {data.map((user: any) => (
              <tr key={user.name + user.id} className="text-sm/6">
                <td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                  <button
                    className="text-indigo-400 hover:text-indigo-500"
                    onClick={() => handleInfoClick(user)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                      />
                    </svg>
                  </button>
                </td>
                <td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                  <div className="flex items-center gap-x-4">
                    <div className="truncate text-sm/6 font-medium text-black">
                      {user.name}
                    </div>
                  </div>
                </td>
                <td className="hidden py-4 pl-0 pr-8 text-sm/6 sm:table-cell">
                  {user.email}
                </td>
                <td className="hidden py-4 pl-0 pr-8 text-sm/6 sm:table-cell">
                  {user.postcode}
                </td>
                <td className="hidden py-4 pl-0 pr-8 text-sm/6 sm:table-cell">
                  {user.child_dob}
                </td>
                <td className="hidden py-4 pl-0 pr-8 text-sm/6 sm:table-cell">
                  {user.eligibility ? (
                    <span
                      className={classNames(
                        statuses.Completed,
                        "inline-block px-2 py-0.5 text-xs/6 font-semibold rounded-full"
                      )}
                    >
                      Eligible
                    </span>
                  ) : (
                    <span
                      className={classNames(
                        statuses.Error,
                        "inline-block px-2 py-0.5 text-xs/6 font-semibold rounded-full"
                      )}
                    >
                      Not Eligible
                    </span>
                  )}
                </td>
                <td className="hidden py-4 pl-0 pr-8 text-sm/6 sm:table-cell text-center">
                  {user.id}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
