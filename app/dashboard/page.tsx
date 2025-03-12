"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import {
  Cog6ToothIcon,
  FolderIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { getCountDownTime, getData, getRemainingTickets } from "../actions";
import Image from "next/image";
import Modal from "../components/modal";

const navigation = [
  { name: "Referrals", href: "#", icon: FolderIcon, current: false },
  {
    name: "Settings",
    href: "dashboard/settings",
    icon: Cog6ToothIcon,
    current: false,
  },
];

const secondaryNavigation = [
  { name: "Overview", href: "#", current: true },
  { name: "Activity", href: "#", current: false },
  { name: "Settings", href: "#", current: false },
  { name: "Collaborators", href: "#", current: false },
  { name: "Notifications", href: "#", current: false },
];

const statuses = {
  Completed: "text-green-400 bg-green-400/10",
  Error: "text-rose-400 bg-rose-400/10",
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface IUserData {
  id: string;
  name: string;
  eligibility: boolean;
  email: string;
  secondEmail: string;
  signposted: string;
  childName: string;
  childDOB: Date;
  parentName: string;
  siblings: string;
  address: string;
  phone: string;
  schoolName: string;
  schoolYear: string;
  diagnosis: string;
  diagnosisDate: Date;
  medication: string;
  professionals: string;
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
  link.download = `referral_export.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
// const fileData = JSON.stringify(userInfo);
// const blob = new Blob([fileData], { type: "text/csv" });
// const url = URL.createObjectURL(blob);
// const link = document.createElement("a");
// link.download = "referral_export.csv";
// link.href = url;
// link.click();
// }

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [data, setData] = useState<IUserData[]>([]);
  const [stats, setStats] = useState<any[]>([]);
  const [timeLive, setTimeLive] = useState<any>();
  const [modalOpen, setModalOpen] = useState(false);
  const [userInfo, setUserInfo] = useState<IUserData>();
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

    getData().then((data: any) => {
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

  const handleInfoClick = (user: IUserData) => {
    setUserInfo(user);
    setModalOpen(!modalOpen);
  };

  return (
    <>
      {modalOpen ? (
        <Modal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          userInfo={userInfo}
        ></Modal>
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
            className="order-first flex-none rounded-full bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400/30 sm:order-none sm:px-4 lg:px-6 "
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
                User
              </th>
              <th
                scope="col"
                className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell"
              >
                Email
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
            {data.map((user) => (
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
