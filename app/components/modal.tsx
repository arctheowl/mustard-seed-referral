"use client";

import { Dispatch, SetStateAction, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

interface IModal {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  userInfo: any;
}

export default function Modal({ modalOpen, setModalOpen, userInfo }: IModal) {
  const handleClose = (value: any) => {
    setModalOpen(false);
  };
  return (
    <Dialog
      open={modalOpen}
      onClose={(e) => handleClose(e)}
      className="relative z-10"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div>
              <div className="mt-3 text-center sm:mt-5">
                <DialogTitle
                  as="h3"
                  className="text-base font-semibold text-gray-900"
                >
                  Referral Information
                </DialogTitle>
                <div className="mt-2 flex-col text-black items-center">
                  <p>Name: {userInfo.name}</p>
                  <p>Second Email: {userInfo.second_email}</p>
                  <p>Signposted: {userInfo.signposted}</p>
                  <p>Child Name: {userInfo.child_name}</p>
                  <p>Child DOB: {userInfo.child_DOB}</p>
                  <p>Parent Name: {userInfo.parent_name}</p>
                  <p>Sibling Names: {userInfo.sibling_names}</p>
                  <p>Sibling Ages: {userInfo.sibling_ages}</p>
                  <p>Address: {userInfo.address}</p>
                  <p>Phone: {userInfo.phone}</p>
                  <p>School Name: {userInfo.school_name}</p>
                  <p>School Year: {userInfo.school_year}</p>
                  <p>Diagnosis: {userInfo.diagnosis}</p>
                  <p>Diagnosis Date: {userInfo.diagnosis_date}</p>
                  <p>Medication: {userInfo.medication}</p>
                  <p>Professionals: {userInfo.professionals}</p>
                  <p>Email: {userInfo.email}</p>
                  <p>
                    Eligibility:
                    {userInfo.eligibility ? "Eligible" : "Not Eligible"}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
              >
                Export
              </button>
              <button
                type="button"
                data-autofocus
                onClick={() => setModalOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:col-start-1 sm:mt-0"
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
