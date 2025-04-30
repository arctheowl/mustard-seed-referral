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

  console.log("userInfo", userInfo);
  console.log("userInfo.siblings", userInfo.siblings);
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

                  {userInfo ? (
                    <div>
                      <p>
                        {userInfo.name}
                      </p>
                      <p>{userInfo.email}</p>
                      <p>{userInfo.second_email}</p>
                      <p>Signposted by: {userInfo.signposted}</p>,
                      Child Name: {userInfo?.child_name}
                      {/* <p>Child DOB: {userInfo?.child_dob}</p> */}
                      <h2>Parent/Guardian Names</h2>
                      {userInfo?.parent_names ? (
                        <p>
                          {userInfo.parent_names.map((parent: any) => (
                            <span key={parent.id}>
                              {parent.firstName} ({parent.parent_email})
                            </span>
                          ))}
                        </p>
                      ) : (
                        <p>No parent/guardian names</p>
                      )}
                      <h2>Siblings:</h2>
                      {userInfo?.siblings ? (
                        <p>
                          {userInfo.siblings.map((sibling: any) => (
                            <span key={sibling.id}>
                              {sibling.firstName} ({sibling.age})
                            </span>
                          ))}
                        </p>
                      ) : (
                        <p>No siblings</p>
                      )}
                      <p></p>{userInfo.address}
                      <p></p>{userInfo.phone}
                      <p></p>{userInfo.school_name}
                      <p></p>{userInfo.school_year}
                      <p></p>{userInfo.diagnosis}
                      {/* <p></p>{userInfo.diagnosis_date} */}
                      <p></p>{userInfo.medication}
                      <p></p>{userInfo.professionals}
                      <p></p>{userInfo.eligibility}
                      <p></p>{userInfo.interests}
                      <p></p>{userInfo.interests_blob}
                      <p></p>{userInfo.communicate_with_others}
                      <p></p>{userInfo.follow_instructions}
                      <p></p>{userInfo.visual_support}
                      <p></p>{userInfo.social_communication}
                      <p></p>{userInfo.highly_anxious}
                      <p></p>{userInfo.recognise_emotions}
                      <p></p>{userInfo.attend_school}
                      <p></p>{userInfo.self_harm}
                      <p></p>{userInfo.areas_of_difficulty}
                      <p></p>{userInfo.daily_skills}
                      <p></p>{userInfo.additional_support}
                      <p>{userInfo.consent}</p>
                    </div>
                  ) : null}
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
