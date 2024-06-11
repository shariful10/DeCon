import React from "react";
import Charts from "../components/Chart/Chart";
import Gauge from "../components/Gauge/Gauge";
import Container from "../components/container/Container";
import Button from "../components/utils/Button";

export default function ResultAndReport() {
  return (
    <Container>
      <div>
        <h1 className="">
          Disassembly Potential of the Building’s core and shell
        </h1>
        <div className="flex items-start justify-between">
          <div className="w-full">
            <Charts
              color="#F4B081"
              title="Disassembly potential of the core connections DPC based on the DfD criteria and barriers"
            />
            <Charts
              color="#4472C4"
              title="Disassembly potential of the core connections DPC"
            />
          </div>

          <div className="w-full">
            <Gauge value={75} />

            {/* button */}
            <Button btnTitle="result and report" />
          </div>
        </div>
      </div>
    </Container>
  );
}
