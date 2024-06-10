import React from "react";
import SelectDropdown from "../components/Select/SelectDropdown";
import Button from "../components/utils/Button";
import Input from "../components/Input/Input";
import Charts from "../components/Chart/Chart";
import { Link } from "react-router-dom";

export default function BuildingCore() {
  const connectionType = [
    {
      label: "Dry Connection",
      value: "dry_connection",
      options: [
        {
          label: "Loose (no fastening material)",
          value: "loose",
          score: 1.0,
        },
        {
          label: "Click connection",
          value: "click_connection",
          score: 1.0,
        },
        {
          label: "Velcro connection",
          value: "velcro_connection",
          score: 1.0,
        },
        {
          label: "Magnetic connection",
          value: "magnetic_connection",
          score: 0,
        },
      ],
    },
    {
      label: "Connection with added elements",
      value: "connection_with_added_elements",
      options: [
        {
          label: "Bolt and nut connection",
          value: "bolt_and_nut_connection",
          score: 0.8,
        },
        {
          label: "Spring connection",
          value: "spring_connection",
          score: 0.8,
        },
        {
          label: "Corner connections",
          value: "corner_connections",
          score: 0.8,
        },
        {
          label: "Screw connection",
          value: "screw_connection",
          score: 0.8,
        },
        {
          label: "Connections with added connection elements",
          value: "connections_with_added_connection_elements",
          score: 0.8,
        },
      ],
    },
    {
      label: "Direct integral connection",
      value: "direct_integral_connection",
      options: [
        {
          label: "Pin connection",
          value: "pin_connection",
          score: 0.6,
        },
        {
          label: "Nail connection",
          value: "nail_connection",
          score: 0.6,
        },
      ],
    },
    {
      label: "Soft chemical connection",
      value: "soft_chemical_connection",
      options: [
        {
          label: "Caulking connection",
          value: "caulking_connection",
          score: 0.2,
        },
        {
          label: "Foam connection (PUR)",
          value: "foam_connection_pur",
          score: 0.2,
        },
      ],
    },
    {
      label: "Hard chemical connection",
      value: "hard_chemical_connection",
      options: [
        {
          label: "Adhesive connection",
          value: "adhesive_connection",
          score: 0.1,
        },
        {
          label: "Dump connection",
          value: "dump_connection",
          score: 0.1,
        },
        {
          label: "Weld connection",
          value: "weld_connection",
          score: 0.1,
        },
        {
          label: "Cementitious connection",
          value: "cementitious_connection",
          score: 0.1,
        },
        {
          label: "Chemical anchors",
          value: "chemical_anchors",
          score: 0.1,
        },
        {
          label: "Hard chemical connection",
          value: "hard_chemical_connection",
          score: 0.1,
        },
      ],
    },
  ];

  return (
    <div className="w-full px-10">
      <div className="flex flex-col">
        <div class="flex gap-5 justify-between">
          <div class="flex-1 box-border text-center">Connection</div>
          <div class="flex-1 box-border text-center">Connection type</div>
          <div class="flex-1 box-border text-center">
            Connection Accessibility
          </div>
          <div class="flex-1 box-border text-center">Independency</div>
          <div class="flex-1 box-border text-center">
            Geometry of product edge of Element
          </div>
          <div class="w-[100px] box-border text-center">Connection number</div>
          <div class="flex-1 box-border text-center">Barriers</div>
          <div class="p-[10px] box-border text-center w-[100px]">
            Barriers number
          </div>
          <div class="flex-1 box-border text-center">
            Disassembly Potential of the Connection DPC
          </div>
        </div>

        <div className="flex gap-5 justify-between mb-20">
          <div className="flex-1">
            {/* <h3 className="text-center mb-3">Connection</h3> */}
            <div className="flex flex-col gap-4">
              <Button btnTitle="Column & Shell element" />
              <Button btnTitle="Beam & Shell element" />
              <Button btnTitle="Slab & Shell element" />
              <Button btnTitle="Bearing wall & Shell element" />
            </div>
          </div>

          <div className="flex-1">
            {/* <h3 className="text-center mb-3">Connection type</h3> */}
            <div className="flex flex-col gap-4">
              <SelectDropdown contents={connectionType} />
              <SelectDropdown contents={connectionType} />
              <SelectDropdown contents={connectionType} />
              <SelectDropdown contents={connectionType} />
              <SelectDropdown contents={connectionType} />
            </div>
          </div>

          <div className="flex-1">
            {/* <h3 className="text-center mb-3">Connection Accessibility</h3> */}
            <div className="flex flex-col gap-4">
              <SelectDropdown />
              <SelectDropdown />
              <SelectDropdown />
              <SelectDropdown />
              <SelectDropdown />
            </div>
          </div>

          <div className="flex-1">
            {/* <h3 className="text-center mb-3">Independency</h3> */}
            <div className="flex flex-col gap-4">
              <SelectDropdown />
              <SelectDropdown />
              <SelectDropdown />
              <SelectDropdown />
              <SelectDropdown />
            </div>
          </div>

          <div className="flex-1">
            {/* <h3 className="text-center mb-3">
              Geometry of product edge of Element
            </h3> */}
            <div className="flex flex-col gap-4">
              <SelectDropdown />
              <SelectDropdown />
              <SelectDropdown />
              <SelectDropdown />
              <SelectDropdown />
            </div>
          </div>

          <div className="w-[100px]">
            {/* <h3 className="text-center mb-3">Connection number</h3> */}
            <div className="flex flex-col gap-4">
              <Input />
              <Input />
              <Input />
              <Input />
              <Input />
            </div>
          </div>

          <div className="flex-1">
            {/* <h3 className="text-center mb-3">Barriers</h3> */}
            <div className="flex flex-col gap-4">
              <SelectDropdown />
              <SelectDropdown />
              <SelectDropdown />
              <SelectDropdown />
              <SelectDropdown />
            </div>
          </div>

          <div className="w-[100px]">
            {/* <h3 className="text-center mb-3">Barriers number</h3> */}
            <div className="flex flex-col gap-4">
              <Input />
              <Input />
              <Input />
              <Input />
              <Input />
            </div>
          </div>

          <div className="flex-1">
            {/* <h3 className="text-center mb-3">
              Disassembly Potential of the Connection DPC
            </h3> */}
            <div className="flex flex-col gap-4">
              <Input className="bg-[#E1EFD8]" />
              <Input className="bg-[#E1EFD8]" />
              <Input className="bg-[#E1EFD8]" />
              <Input className="bg-[#E1EFD8]" />
              <Input className="bg-[#E1EFD8]" />
            </div>
          </div>
        </div>

        <div className="flex gap-[60px] justify-between">
          <Charts
            color="#4472C4"
            title="Disassembly potential of the core connections DPC"
          />
          <Charts
            color="#F4B081"
            title="Disassembly potential of the core connections DPC based on the DfD criteria and barriers"
          />
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-4">
              <Button btnTitle="Total core connections:" />
              <Button btnTitle="Total DPC of the building’s core:" />
            </div>
            <div className="w-full flex items-center gap-5">
              <Link to={"/constructions-type"}>
                <Button btnTitle="Previous" />
              </Link>
              <Link to="/building-shell">
                <Button btnTitle="Next" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
