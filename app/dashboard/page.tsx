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
// let stats = [
//   // { name: "Number of Referrals", value: "50" },
//   { name: "Signup for Interest", value: "150" },
//   { name: "Time Live", value: "3", unit: "mins" },
//   { name: "Success rate", value: "98.5%" },
// ];
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
      <div>
        <Dialog
          open={sidebarOpen}
          onClose={setSidebarOpen}
          className="relative z-50 xl:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                  <button
                    type="button"
                    onClick={() => setSidebarOpen(false)}
                    className="-m-2.5 p-2.5"
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </button>
                </div>
              </TransitionChild>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 ring-1 ring-white/10">
                <div className="flex h-16 shrink-0 items-center">
                  <img
                    alt="Your Company"
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                    className="h-8 w-auto"
                  />
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? "bg-gray-800 text-white"
                                  : "text-gray-400 hover:bg-gray-800 hover:text-white",
                                "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"
                              )}
                            >
                              <item.icon
                                aria-hidden="true"
                                className="size-6 shrink-0"
                              />
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className="hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-72 xl:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-black/10 px-6 ring-1 ring-white/5">
            <div className="flex h-24 items-center">
              <Image
                alt="Your Company"
                src="/MustardSeed_Primary-Logo.png"
                width={400}
                height={400}
                className="h-24 w-auto"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-800 text-white"
                              : "text-gray-400 hover:bg-gray-800 hover:text-white",
                            "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"
                          )}
                        >
                          <item.icon
                            aria-hidden="true"
                            className="size-6 shrink-0"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="xl:pl-72">
          {/* Sticky search header */}
          {/* <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-white/5 bg-gray-900 px-4 shadow-sm sm:px-6 lg:px-8">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="-m-2.5 p-2.5 text-white xl:hidden"
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon aria-hidden="true" className="size-5" />
            </button>

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <form action="#" method="GET" className="grid flex-1 grid-cols-1">
                <input
                  name="search"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  className="col-start-1 row-start-1 block size-full bg-transparent pl-8 text-base text-white outline-none placeholder:text-gray-500 sm:text-sm/6"
                />
                <MagnifyingGlassIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-500"
                />
              </form>
            </div>
          </div> */}

          <main>
            <header>
              {/* Secondary navigation */}
              {/* <nav className="flex overflow-x-auto border-b border-white/10 py-4">
                <ul
                  role="list"
                  className="flex min-w-full flex-none gap-x-6 px-4 text-sm/6 font-semibold text-gray-400 sm:px-6 lg:px-8"
                >
                  {secondaryNavigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={item.current ? "text-indigo-400" : ""}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav> */}

              {/* Heading */}
              <div className="flex flex-col items-start justify-between gap-x-8 gap-y-4 bg-gray-700/10 px-4 py-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
                <div>
                  <div className="flex items-center gap-x-3">
                    <div className="flex-none rounded-full bg-green-400/10 p-1 text-green-400">
                      <div className="size-2 rounded-full bg-current" />
                    </div>
                    <h1 className="flex gap-x-3 text-base/7">
                      <span className="font-semibold text-white">
                        Referral Dashboard
                      </span>
                    </h1>
                  </div>
                </div>
                <div className="order-first flex-none rounded-full bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400/30 sm:order-none">
                  Production
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 bg-gray-700/10 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, statIdx) => (
                  <div
                    key={stat.name}
                    className={classNames(
                      statIdx % 2 === 1
                        ? "sm:border-l"
                        : statIdx === 2
                        ? "lg:border-l"
                        : "",
                      "border-t border-white/5 px-4 py-6 sm:px-6 lg:px-8"
                    )}
                  >
                    <p className="text-sm/6 font-medium text-gray-400">
                      {stat.name}
                    </p>
                    <p className="mt-2 flex items-baseline gap-x-2">
                      <span className="text-4xl font-semibold tracking-tight text-white">
                        {stat.value}
                      </span>
                      {stat.unit ? (
                        <span className="text-sm text-gray-400">
                          {stat.unit}
                        </span>
                      ) : null}
                    </p>
                  </div>
                ))}
              </div>
            </header>
            {modalOpen ? (
              <Modal
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                userInfo={userInfo}
              ></Modal>
            ) : null}
            {/* Activity list */}
            <div className="border-t border-white/10 pt-11">
              <div className="flex items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
                <h2 className="px-4 text-base/7 font-semibold text-white sm:px-6 lg:px-8">
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
                <thead className="border-b border-white/10 text-sm/6 text-white">
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
                          <div className="truncate text-sm/6 font-medium text-white">
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
          </main>
        </div>
      </div>
    </>
  );
}
