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

const Location = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
              <Link to={"/Task"} className="ml-4">
                Task
              </Link>
            </Button>

            <Button
              type="submit"
              size="large"
              className="mt-4"
              variant="second"
              onClick={() => setIsModalOpen(true)}
            >
              <FontAwesomeIcon icon={faLocationDot} />
              <div className="ml-4">Location</div>
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
          <button className="mt-8 font-medium">+ Check In</button>

          <h1 className="mt-3 font-medium">Current location</h1>
          <div className="flex mt-2">
            <div>📍</div>
            <div className="flex flex-col ml-4">
              <div className="-mb-2">Pustegrand, Stockholm, SE</div>
              <div>
                <span className="text-xs text-gray-400">
                  59.3293 N, 18.0686 E
                </span>
              </div>
            </div>
          </div>

          <h1 className="mt-3 font-medium">Previous location</h1>
          <div className="flex mt-2">
            <div>📍</div>
            <div className="flex flex-col ml-4">
              <div className="-mb-2">Halsingegatan, Stockholm, SE</div>
              <div>
                <span className="text-xs text-gray-400">
                  59.3293 N, 18.0686 E
                </span>
              </div>
            </div>
          </div>
          <div className="flex mt-2">
            <div>📍</div>
            <div className="flex flex-col ml-4">
              <div className="-mb-2">Pustegrand, Stockholm, SE</div>
              <div>
                <span className="text-xs text-gray-400">
                  59.3293 N, 18.0686 E
                </span>
              </div>
            </div>
          </div>
          <div className="flex mt-2">
            <div>📍</div>
            <div className="flex flex-col ml-4">
              <div className="-mb-2">Langa Gatan, Stockholm, SE</div>
              <div>
                <span className="text-xs text-gray-400">
                  59.3293 N, 18.0686 E
                </span>
              </div>
            </div>
          </div>
          <div className="flex mt-2">
            <div>📍</div>
            <div className="flex flex-col ml-4">
              <div className="-mb-2">Djurgarden, Stockholm, SE</div>
              <div>
                <span className="text-xs text-gray-400">
                  59.3293 N, 18.0686 E
                </span>
              </div>
            </div>
          </div>
          <div className="flex mt-2">
            <div>📍</div>
            <div className="flex flex-col ml-4">
              <div className="-mb-2">Svartensgatan, Stockholm, SE</div>
              <div>
                <span className="text-xs text-gray-400">
                  59.3293 N, 18.0686 E
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Location;
