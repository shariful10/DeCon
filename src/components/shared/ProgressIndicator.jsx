import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { updateIndicator } from "../../redux/features/ProgressIndicator";

const ProgressIndicator = () => {
  const { progressIndicator } = useSelector(
    (state) => state?.progressIndicator
  );
  const dispatch = useDispatch();
  const location = useLocation();
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    // Initialize steps from progressIndicator
    if (progressIndicator?.length) setSteps(progressIndicator);
  }, [progressIndicator]);

  useEffect(() => {
    const currentPath = location?.pathname;
    const step = steps?.find((step) => step?.path === currentPath);
    if (step && !step.completed) {
      dispatch(updateIndicator({ id: step.id }));
    }
  }, [location, steps, dispatch]);

  return (
    <div className="flex items-center justify-center">
      {steps?.length > 0 &&
        steps.map((step, index) => (
          <div
            key={index}
            className="flex items-center justify-center relative w-[138px]"
          >
            <Link to={`${step.completed ? step?.path : "#"}`}>
              <div className="flex flex-col items-center justify-end h-full">
                <div className="text-center mb-3 min-w-max">
                  <span className="block text-sm">{step.label}</span>
                </div>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step.completed
                      ? `bg-[#A9CD98] border-2 ${
                          step.path === location?.pathname
                            ? "border-[#0e2c1b]"
                            : "border-[#6fac47]"
                        }`
                      : "bg-white border-2 border-gray-400"
                  }`}
                >
                  {step.completed ? (
                    <span>
                      <svg
                        className="size-7 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="5"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </span>
                  ) : (
                    <span className="text-green-400"></span>
                  )}
                </div>
              </div>
            </Link>

            {index !== steps.length - 1 && (
              <div className="flex w-[102px] border-t-2 border-gray-400 mx-4 absolute bottom-5 md:-right-[67%] lg:-right-1/2 -z-10"></div>
            )}
          </div>
        ))}
    </div>
  );
};

export default ProgressIndicator;
