import { Button, message, Steps, theme } from "antd";
import { useState } from "react";
import ConstructionsType from "../ConstructionsType";

export default function StepPage() {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: <span>Home</span>,
      content: "Home content",
    },
    {
      title: <span>Building information:</span>,
      content: "Building information:",
    },
    {
      title: (
        <span className="text-wrap w-full capitalize">construction type:</span>
      ),
      content: (
        <>
          <ConstructionsType next={() => next()} prev={() => prev()} />
        </>
      ),
    },
    {
      title: "Core: ",
      content: "Core content",
    },
    {
      title: "Shell: ",
      content: "Shell content",
    },
    {
      title: "Result & Report",
      content: "Result & Report",
    },
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  return (
    <div className="m-5">
      {current > 1 && (
        <div className="w-2/3 ml-auto">
          <Steps current={current} items={items} />
        </div>
      )}

      {/* content */}
      <div>{steps[current].content}</div>

      {/* buttons */}
      <div>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </div>
  );
}
