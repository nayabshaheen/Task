import React, { useState } from "react";
import { Link, Router } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faAlignRight } from "@fortawesome/free-solid-svg-icons";

const Task = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReminderOpen, setIsReminderOpen] = useState(false);
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("data", event);
  };
  return (
    <>
      <div className="grid grid-cols-3">
        <section className="h-full flex flex-col justify-between">
          <div className="">
            <Button
              type="submit"
              size="large"
              variant="second"
              className="mt-8"
            >
              <FontAwesomeIcon icon={faListCheck} />
              <div className="ml-4">Task</div>
            </Button>

            <Button
              type="submit"
              size="large"
              className="mt-4"
              variant="second"
            >
              <FontAwesomeIcon icon={faLocationDot} />
              <Link to={"/Location"} className="ml-4">
                Location
              </Link>
            </Button>
          </div>
          <div>
            <Button
              type="submit"
              size="large"
              variant="second"
              className="mt-80"
            >
              <FontAwesomeIcon icon={faArrowRightFromBracket} />

              <Link to={"/"} className="ml-4">
                Logout
              </Link>
            </Button>
          </div>
        </section>
        <section>
          <button
            className="mt-8 font-medium"
            onClick={() => setIsModalOpen(true)}
          >
            + Add new task
          </button>

          <h1 className="mt-3 font-medium">Incomplete</h1>
          <div className="flex mt-2">
            <div onClick={() => setIsReminderOpen(true)}>
              <Input id="red-checkbox" type="checkbox" />
            </div>
            <div className="flex flex-col ml-4">
              <button className="-mb-2">Submit my resume</button>
              <div>
                <span className="text-xs text-gray-400">⏰ Today, 17.00</span>
              </div>
            </div>
          </div>
          <div className="flex mt-2">
            <div onClick={() => setIsReminderOpen(true)}>
              <Input id="red-checkbox" type="checkbox" />
            </div>
            <div className="flex flex-col ml-4">
              <div className="-mb-2">Complete the test</div>
              <div>
                <span className="text-xs text-gray-400">⏰ Today, 17.00</span>
              </div>
            </div>
          </div>
          <div className="flex mt-2">
            <div onClick={() => setIsReminderOpen(true)}>
              <Input id="red-checkbox" type="checkbox" />
            </div>
            <div className="flex flex-col ml-4">
              <div className="-mb-2">Meeting with Jack</div>
              <div>
                <span className="text-xs text-gray-400">⏰ Today, 17.00</span>
              </div>
            </div>
          </div>
          <div className="flex mt-2">
            <div onClick={() => setIsReminderOpen(true)}>
              <Input id="red-checkbox" type="checkbox" />
            </div>
            <div className="flex flex-col ml-4">
              <div className="-mb-2">Buy a chocolate for Mom</div>
              <div>
                <span className="text-xs text-gray-400">⏰ Today, 17.00</span>
              </div>
            </div>
          </div>
          <div className="flex mt-2">
            <div onClick={() => setIsReminderOpen(true)}>
              <Input id="red-checkbox" type="checkbox" />
            </div>
            <div className="flex flex-col ml-4">
              <div className="-mb-2">Facetime with Dad</div>
              <div>
                <span className="text-xs text-gray-400">⏰ Today, 17.00</span>
              </div>
            </div>
          </div>
          <h1 className="mt-3 font-medium">Complete</h1>
          <div className="flex mt-2 ">
            <div>
              <input checked id="checked-checkbox" type="checkbox" />
            </div>
            <div className="ml-4">Respond to Jane email</div>
          </div>
          <div className="flex mt-2 ">
            <div>
              <input checked id="checked-checkbox" type="checkbox" />
            </div>
            <div className="ml-4">Rechedule weekly meeting</div>
          </div>
          <div className="flex mt-2 ">
            <div>
              <input checked id="checked-checkbox" type="checkbox" />
            </div>
            <div className="ml-4">Service my bike</div>
          </div>
          <div className="flex mt-2 ">
            <div>
              <input checked id="checked-checkbox" type="checkbox" />
            </div>
            <div className="ml-4">Recheck the agreement document</div>
          </div>
          <div className="flex mt-2 ">
            <div>
              <input checked id="checked-checkbox" type="checkbox" />
            </div>
            <div className="ml-4">Check the latest on Community</div>
          </div>
        </section>
      </div>

      <NewTask isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Reminder
        isReminderOpen={isReminderOpen}
        setIsReminderOpen={setIsReminderOpen}
      />
    </>
  );
};

export default Task;

const NewTask = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <>
      <div
        id="authentication-modal"
        tabindex="-1"
        aria-hidden="true"
        className={`fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex items-center justify-center bg-black bg-opacity-50
        ${isModalOpen ? "" : "hidden"}`}
      >
        <div className="relative w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="px-6 py-6 lg:px-8">
              {" "}
              <h3 className="text-left text-1xl mb-5 font-bold mb-12 ">
                New Task
              </h3>
              <form className="space-y-6" action="#">
                <div>
                  <div className="flex items-center justify-center flex-col">
                    <div className=" w-4/5 border-b">
                      <FontAwesomeIcon icon={faComment} />
                      <input
                        type="text"
                        className=" p-2  text-sm  border-gray-400 outline-none opacity-50 focus:border-blue-400 py-5"
                        placeholder="Summary"
                      />
                    </div>
                    <div className=" w-4/5 border-b">
                      <FontAwesomeIcon icon={faAlignRight} />
                      <input
                        type="text"
                        className=" p-2 text-sm border-gray-400 outline-none opacity-50 focus:border-blue-400 py-5 "
                        placeholder="Description"
                      />
                    </div>
                    <div className=" w-4/5 border-b">
                      <FontAwesomeIcon icon={faClock} />
                      <input
                        type="text"
                        className=" p-2 text-sm border-gray-400 outline-none opacity-50 focus:border-blue-400 py-5"
                        placeholder="Due Date"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center flex-col">
                  <Button
                    type="submit"
                    size="large"
                    variant="naked"
                    className="w-64 rounded-3xl "
                  >
                    Save
                  </Button>
                  <Button
                    type="submit"
                    size="large"
                    variant="danger"
                    className="w-64 "
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Reminder = ({ isReminderOpen, setIsReminderOpen }) => {
  return (
    <>
      <div
        id="authentication-modal"
        tabindex="-1"
        aria-hidden="true"
        className={`fixed top-0 left-50 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-end bg-black bg-opacity-50
        ${isReminderOpen ? "" : "hidden"}`}
      >
        <div className=" w-full max-w-md max-h-full">
          <div className=" bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="px-6 py-6 lg:px-8">
              <div>
                <h3 className="text-left text-1xl font-bold ">
                  Submit my Resume
                </h3>
                <h3 className="text-left">Send my resume to DigitalTolk</h3>
                <div></div>
              </div>
              <form className="space-y-6" action="#">
                <div className="  flex  justify-end flex-cols-2 mt-5 bg-gray-100 ">
                  <Button
                    type="submit"
                    size="large"
                    variant="danger"
                    className="w-30 "
                    onClick={() => setIsReminderOpen(false)}
                  >
                    Skip
                  </Button>
                  <Button
                    type="submit"
                    size="large"
                    variant="danger"
                    className="w-30 "
                    onClick={() => setIsReminderOpen(false)}
                  >
                    Remind me later
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
