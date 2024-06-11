import React from "react";
import Charts from "../components/Chart/Chart";
import Gauge from "../components/Gauge/Gauge";
import Container from "../components/container/Container";
import Button from "../components/utils/Button";
import ChartTwo from "../components/Chart/ChartTwo";

export default function ResultAndReport() {
  return (
    <Container>
      <div>
        <h1 className="text-center mb-7">
          Disassembly Potential of the Building’s core and shell
        </h1>
        <div className="flex items-start justify-between gap-7">
          <div className="w-1/2 flex flex-col items-start justify-between gap-7">
            <ChartTwo
              color="#F4B081"
              title="Disassembly potential of the core connections DPC based on the DfD criteria and barriers"
            />
            <Charts
              color="#4472C4"
              title="Disassembly potential of the core connections DPC"
            />
          </div>

          <div className="w-1/2 flex flex-col items-center justify-center gap-7">
            {/* <Gauge value={75} /> */}
            <Gauge value={55} />

            <p> Total disassembly potential </p>

            {/* button */}
            <Button btnTitle="Download report" />
          </div>
        </div>
      </div>
    </Container>
  );
}
