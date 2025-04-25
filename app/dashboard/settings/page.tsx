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
  getReferrals,
  getRemainingTickets,
  setActionsTickets,
} from "@/app/actions";
import Image from "next/image";
import { format, set } from "date-fns";
import { Success, Error } from "@/app/components/feedback";

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

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    let countDownTimer = "";
    let serverTickets = "";
    getRemainingTickets().then((data: any) => {
      serverTickets = data[0].ticket_number;
    });
    getCountDownTime().then((data: any) => {
      countDownTimer = data[0]?.time.toString();
    });

    getReferrals().then((data: any) => {
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
    setShow(true);
    adjustCountDownTime(`${date} ${hours}`)
      .then(() => {
        setSuccess(true);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  };

  const handleTicketSubmit = (e: any) => {
    e.preventDefault();
    setShow(true);
    setActionsTickets(tickets)
      .then(() => {
        setSuccess(true);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  };

  return (
    <>
      {success ? (
        <Success
          message="Data has been successfully updated"
          show={show}
          setShow={setShow}
        />
      ) : null}
      {error ? (
        <Error
          message="Data has been successfully updated"
          show={show}
          setShow={setShow}
        />
      ) : null}
      <div className="flex w-full gap-x-4 px-4 py-4 sm:px-6 lg:px-8 border-t border-black">
        <form>
          <div className="mb-4 text-black">
            <label
              htmlFor="date"
              className="block text-sm font-medium text-black"
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
              className="block text-sm font-medium text-black"
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
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
              className="block text-sm font-medium text-black"
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
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={(e) => {
              e.preventDefault();
              handleTicketSubmit(e);
            }}
          >
            Set Ticket Number
          </button>
        </form>
      </div>
    </>
  );
}
