"use client";

import { useEffect, useState } from "react";
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
import {
  adjustCountDownTime,
  getCountDownTime,
  getData,
  getRemainingTickets,
  setActionsTickets,
} from "@/app/actions";
import Image from "next/image";
import { format } from "date-fns";

const navigation = [
  { name: "Referrals", href: "/dashboard", icon: FolderIcon, current: false },
  { name: "Settings", href: "#", icon: Cog6ToothIcon, current: false },
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
}

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [data, setData] = useState<IUserData[]>([]);
  const [tickets, setTickets] = useState("");
  const [hours, setHours] = useState("");
  const [date, setDate] = useState("");
  const [stats, setStats] = useState<any[]>([]);
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
          value: Math.floor((currentTime - Date.parse(countDownTimer)) / 60000),
          unit: "mins",
        },
      ]);
    });
  }, []);

  const handleTimeSubmit = (e: any) => {
    e.preventDefault();
    adjustCountDownTime(`${date} ${hours}`);
  };

  const handleTicketSubmit = (e: any) => {
    e.preventDefault();
    setActionsTickets(tickets);
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
          <main>
            <header>
              <div className="flex flex-col items-start justify-between gap-x-8 gap-y-4 bg-gray-700/10 px-4 py-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
                <div>
                  <div className="flex items-center gap-x-3">
                    <div className="flex-none rounded-full bg-green-400/10 p-1 text-green-400">
                      <div className="size-2 rounded-full bg-current" />
                    </div>
                    <h1 className="flex gap-x-3 text-base/7">
                      <span className="font-semibold text-white">
                        Referral Dashboard Settings
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
            <div className="flex w-full gap-x-4 px-4 py-4 sm:px-6 lg:px-8">
              <form>
                <div className="mb-4 text-black">
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date
                  </label>
                  <input
                    onChange={(e) => setDate(e.target.value)}
                    required
                    type="date"
                    id="date"
                    name="date"
                    min="0"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <label
                    htmlFor="hours"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Time
                  </label>
                  <input
                    onChange={(e) => {
                      setHours(e.target.value + ":00");
                    }}
                    required
                    type="time"
                    id="hours"
                    name="hours"
                    min="0"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <button
                  type="button"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={(e) => {
                    e.preventDefault();
                    handleTimeSubmit(e);
                  }}
                >
                  Set Timer
                </button>
              </form>
              <form>
                <div className="mb-4 text-black">
                  <label
                    htmlFor="hours"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Ticket Number
                  </label>
                  <input
                    onChange={(e) => {
                      setTickets(e.target.value);
                    }}
                    required
                    type="number"
                    id="ticket_number"
                    name="ticket_number"
                    min="0"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <button
                  type="button"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={(e) => {
                    e.preventDefault();
                    handleTicketSubmit(e);
                  }}
                >
                  Set Ticket Number
                </button>
              </form>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
