import React from "react";
import SelectDropdown from "../components/Select/SelectDropdown";
import Button from "../components/utils/Button";
import Input from "../components/Input/Input";
import Charts from "../components/Chart/Chart";

export default function BuildingCore() {
  return (
    <div className="w-full px-10">
      <div className="flex flex-col">
        <div className="flex gap-5 mb-20">
          <div className="flex-1">
            <h3 className="text-center mb-3">Connection</h3>
            <div className="flex flex-col gap-4">
              <Button btnTitle="Column & Beam" />
              <Button btnTitle="Column & Bearing wall" />
              <Button btnTitle="Column & Foundation" />
              <Button btnTitle="Beam & Slab" />
              <Button btnTitle="Slab & Bearing wall" />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-center mb-3">Connection type</h3>
            <div className="flex flex-col gap-4">
              <SelectDropdown />
              <SelectDropdown />
              <SelectDropdown />
              <SelectDropdown />
              <SelectDropdown />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-center mb-3">Connection Accessibility</h3>
            <div className="flex flex-col gap-4">
              <SelectDropdown />
              <SelectDropdown />
              <SelectDropdown />
              <SelectDropdown />
              <SelectDropdown />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-center mb-3">Independency</h3>
            <div className="flex flex-col gap-4">
              <SelectDropdown />
              <SelectDropdown />
              <SelectDropdown />
              <SelectDropdown />
              <SelectDropdown />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-center mb-3">
              Geometry of product edge of Element
            </h3>
            <div className="flex flex-col gap-4">
              <SelectDropdown />
              <SelectDropdown />
              <SelectDropdown />
              <SelectDropdown />
              <SelectDropdown />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-center mb-3">Connection number</h3>
            <div className="flex flex-col gap-4">
              <Input />
              <Input />
              <Input />
              <Input />
              <Input />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-center mb-3">Barriers</h3>
            <div className="flex flex-col gap-4">
              <SelectDropdown />
              <SelectDropdown />
              <SelectDropdown />
              <SelectDropdown />
              <SelectDropdown />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-center mb-3">Barriers number</h3>
            <div className="flex flex-col gap-4">
              <Input />
              <Input />
              <Input />
              <Input />
              <Input />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-center mb-3">
              Disassembly Potential of the Connection DPC
            </h3>
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
              <Button btnTitle="Previous" />
              <Button btnTitle="Next" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
