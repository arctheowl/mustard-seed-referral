"use client";

import { use, useEffect, useState } from "react";
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
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import {
  getCountDownTime,
  getReferrals,
  getRemainingTickets,
  getWaitlist,
} from "../actions";
import Image from "next/image";

const navigation = [
  { name: "Referrals", href: "/dashboard", icon: FolderIcon, current: false },
  {
    name: "Waitlist",
    href: "/dashboard/waitlist",
    icon: EnvelopeIcon,
    current: false,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Cog6ToothIcon,
    current: false,
  },
];

const statuses = {
  Completed: "text-green-400 bg-green-400/10",
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

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [data, setData] = useState<IUserData[]>([]);
  const [waitlistData, setWaitlistData] = useState<IWaitlistData[]>([]);
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
    getWaitlist().then((data: any) => {
      setWaitlistData(data);
      console.log("Waitlist", data);
    });

    getReferrals().then((data: any) => {
      setData(data);
      setStats([
        {
          name: "Number of Referrals",
          value: data.length.toString(),
        },
        {
          name: "Remaing Referrals",
          value: serverTickets,
        },
        {
          name: "Waitlist",
          value: waitlistData.length.toString(),
        },
        {
          name: "Count Down Timer",
          value: format(countDownTimer, "HH:mm:ss dd-MM-yyyy"),
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
    <div className="min-h-screen flex bg-slate-200 text-black">
      <Dialog
        open={sidebarOpen}
        onClose={setSidebarOpen}
        className="relative z-50 xl:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0  transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
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
                  <XMarkIcon aria-hidden="true" className="size-6 text-black" />
                </button>
              </div>
            </TransitionChild>
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex grow flex-col gap-y-5 overflow-y-auto px-6 ring-1 ring-black">
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
                          {item.current ? (
                            <a href="#">
                              {" "}
                              <item.icon
                                aria-hidden="true"
                                className="size-6 shrink-0"
                              />
                              {item.name}
                            </a>
                          ) : (
                            <a
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? "bg-gray-800 text-black text-7xl"
                                  : "text-black hover:bg-gray-200 hover:text-black",
                                "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"
                              )}
                            >
                              <item.icon
                                aria-hidden="true"
                                className="size-6 shrink-0"
                              />
                              {item.name}
                            </a>
                          )}
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
        <div className="flex grow flex-col gap-y-5 overflow-y-auto px-6 ring-1 ring-black">
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
                      {item.current ? (
                        <a href="#">
                          {" "}
                          <item.icon
                            aria-hidden="true"
                            className="size-6 shrink-0"
                          />
                          {item.name}
                        </a>
                      ) : (
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-800 text-black"
                              : "text-black hover:bg-gray-400 hover:text-black",
                            "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"
                          )}
                        >
                          <item.icon
                            aria-hidden="true"
                            className="size-6 shrink-0"
                          />
                          <p className="text-2xl">{item.name}</p>
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="xl:pl-72">
        <main>
          <header>
            <div className="flex flex-col items-start justify-between gap-x-8 gap-y-4 px-4 py-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
              <div>
                <div className="flex items-center gap-x-3">
                  <div className="flex-none rounded-full bg-green-400/10 p-1 text-green-400">
                    <div className="size-2 rounded-full bg-current" />
                  </div>
                  <h1 className="flex gap-x-3 text-base/7">
                    <span className="font-semibold text-black">
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
            <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-5">
              {stats.map((stat, statIdx) => (
                <div
                  key={stat.name}
                  className={classNames(
                    statIdx % 2 === 1
                      ? "sm:border-l"
                      : statIdx === 2
                      ? "lg:border-l"
                      : "",
                    "border-t border-black px-4 py-6 sm:px-6 lg:px-8"
                  )}
                >
                  <p className="text-sm/6 font-medium text-black">
                    {stat.name}
                  </p>
                  <p className="mt-2 flex items-baseline gap-x-2">
                    <span className="text-4xl font-semibold tracking-tight text-black">
                      {stat.value}
                    </span>
                    {stat.unit ? (
                      <span className="text-sm text-black">{stat.unit}</span>
                    ) : null}
                  </p>
                </div>
              ))}
            </div>
          </header>
          {children}
        </main>
      </div>
    </div>
  );
}
