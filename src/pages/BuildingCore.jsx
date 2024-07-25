import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Charts from "../components/Chart/Chart";
import Input from "../components/Input/Input";
import SelectDropdown from "../components/Select/SelectDropdown";
import Button from "../components/utils/Button";
import ProgressBar from "../components/utils/ProgressBar";
import {
  addBuildingCore,
  addBuildingCoreInfo,
  addBuildingCoreTotalValue,
} from "../redux/features/buildingCoreSlice";
import {
  calculateDPC,
  connectionType,
  connectionAccessibilityOptions,
  independency,
  GeometryOfProductEdge,
  barriers,
} from "../helper/index";

export default function BuildingCore() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { buildingCore } = useSelector((state) => state.buildingCore);
  const { buildingCoreInfo } = useSelector((state) => state.buildingCore);
  const buildingCoreTotalValue = useSelector(
    (state) => state.buildingCoreTotalValue
  );

  const [buildingCoreData, setBuildingCoreData] = useState({
    columnAndBeam: {},
    columnAndSlab: {},
    columnAndBearingWall: {},
    columnAndFoundation: {},
    beamAndSlab: {},
    slabAndBearingWall: {},
  });

  const [dpc, setDPC] = useState({
    columnAndBeamDPC: "",
    columnAndSlabDPC: "",
    columnAndBearingWallDPC: "",
    columnAndFoundationDPC: "",
    beamAndSlabDPC: "",
    slabAndBearingWallDPC: "",
  });

  const {
    columnAndBeamDPC,
    columnAndSlabDPC,
    columnAndBearingWallDPC,
    columnAndFoundationDPC,
    beamAndSlabDPC,
    slabAndBearingWallDPC,
  } = dpc;

  const [totalValue, setTotalValue] = useState({
    totalConnectionTypesScore: "",
    connectionAccessibilityScore: "",
    totalGpeScore: "",
    totalIndependencyScore: "",
    totalConnectionNumberScore: "",
    totalBarriersScore: "",
    totalBarriersNumbers: "",
    totalDPCOfBuildingCore: "",
  });

  const {
    totalConnectionTypesScore,
    connectionAccessibilityScore,
    totalGpeScore,
    totalIndependencyScore,
    totalConnectionNumberScore,
    totalBarriersScore,
    totalDPCOfBuildingCore,
  } = totalValue;

  const handleSetData = (props) => {
    const { connectionName, attributeKey, controlValue } = props;
    setBuildingCoreData({
      ...buildingCoreData,
      [connectionName]: {
        ...buildingCoreData[connectionName],
        [attributeKey]: controlValue,
      },
    });
  };

  const calculateTotalScores = (data, attributeKey) => {
    return Object.values(data)?.reduce((acc, item) => {
      const accNumber = acc || 0;
      const itemNumber = item?.[attributeKey]?.score || 0;
      const totalScores = accNumber + itemNumber;
      return totalScores;
    }, 0);
  };

  const totalColumnAndBeamDPC =
    isNaN(columnAndBeamDPC) ||
    columnAndBeamDPC == null ||
    columnAndBeamDPC === ""
      ? buildingCore[columnAndBeamDPC]?.toFixed(0) || ""
      : parseFloat(columnAndBeamDPC)?.toFixed(0) || "";

  const totalColumnAndSlabDPC =
    isNaN(columnAndSlabDPC) ||
    columnAndSlabDPC == null ||
    columnAndSlabDPC === ""
      ? buildingCore[columnAndSlabDPC]?.toFixed(0) || ""
      : parseFloat(columnAndSlabDPC)?.toFixed(0) || "";

  const totalColumnAndBearingWallDPC =
    isNaN(columnAndBearingWallDPC) ||
    columnAndBearingWallDPC == null ||
    columnAndBearingWallDPC === ""
      ? buildingCore[columnAndBearingWallDPC]?.toFixed(0) || ""
      : parseFloat(columnAndBearingWallDPC)?.toFixed(0) || "";

  const totalColumnAndFoundationDPC =
    isNaN(columnAndFoundationDPC) ||
    columnAndFoundationDPC == null ||
    columnAndFoundationDPC === ""
      ? buildingCore[columnAndFoundationDPC]?.toFixed(0) || ""
      : parseFloat(columnAndFoundationDPC)?.toFixed(0) || "";

  const totalBeamAndSlabDPC =
    isNaN(beamAndSlabDPC) || beamAndSlabDPC == null || beamAndSlabDPC === ""
      ? buildingCore[beamAndSlabDPC]?.toFixed(0) || ""
      : parseFloat(beamAndSlabDPC)?.toFixed(0) || "";

  const totalSlabAndBearingWallDPC =
    isNaN(slabAndBearingWallDPC) ||
    slabAndBearingWallDPC == null ||
    slabAndBearingWallDPC === ""
      ? buildingCore[slabAndBearingWallDPC]?.toFixed(0) || ""
      : parseFloat(slabAndBearingWallDPC)?.toFixed(0) || "";

  useEffect(() => {
    let columnAndBeamDPC;
    let columnAndSlabDPC;
    let columnAndBearingWallDPC;
    let columnAndFoundationDPC;
    let beamAndSlabDPC;
    let slabAndBearingWallDPC;
    let totalDPC = 0;

    // Column and beam calculation
    if (buildingCoreData["columnAndBeam"]) {
      const totalValue = calculateDPC(buildingCoreData["columnAndBeam"]);
      columnAndBeamDPC = totalValue;
    }
    // Column and slab calculation
    if (buildingCoreData["columnAndSlab"]) {
      const totalValue = calculateDPC(buildingCoreData["columnAndSlab"]);
      columnAndSlabDPC = totalValue;
    }
    // Column and bearing calculation
    if (buildingCoreData["columnAndBearingWall"]) {
      const totalValue = calculateDPC(buildingCoreData["columnAndBearingWall"]);
      columnAndBearingWallDPC = totalValue;
    }
    // Column and foundation calculation
    if (buildingCoreData["columnAndFoundation"]) {
      const totalValue = calculateDPC(buildingCoreData["columnAndFoundation"]);
      columnAndFoundationDPC = totalValue;
    }
    // Column and slab calculation
    if (buildingCoreData["beamAndSlab"]) {
      const totalValue = calculateDPC(buildingCoreData["beamAndSlab"]);
      beamAndSlabDPC = totalValue;
    }
    // Slab and bearing calculation
    if (buildingCoreData["slabAndBearingWall"]) {
      const totalValue = calculateDPC(buildingCoreData["slabAndBearingWall"]);
      slabAndBearingWallDPC = totalValue;
    }

    setDPC({
      ...dpc,
      columnAndBeamDPC,
      columnAndSlabDPC,
      columnAndBearingWallDPC,
      columnAndFoundationDPC,
      beamAndSlabDPC,
      slabAndBearingWallDPC,
    });

    // totalCoreConnections
    let columnAndBeamDPCTotal =
      columnAndBeamDPC || buildingCore["columnAndBeamDPC"];
    let columnAndSlabDPCTotal =
      columnAndSlabDPC || buildingCore["columnAndSlabDPC"];
    let columnAndBearingWallDPCTotal =
      columnAndBearingWallDPC || buildingCore["columnAndBearingWallDPC"];
    let columnAndFoundationDPCTotal =
      columnAndFoundationDPC || buildingCore["columnAndFoundationDPC"];
    let beamAndSlabDPCTotal = beamAndSlabDPC || buildingCore["beamAndSlabDPC"];
    let slabAndBearingWallDPCTotal =
      slabAndBearingWallDPC || buildingCore["slabAndBearingWallDPC"];

    if (columnAndBeamDPCTotal) {
      totalDPC += columnAndBeamDPCTotal;
    }
    if (columnAndSlabDPCTotal) {
      totalDPC += columnAndSlabDPCTotal;
    }
    if (columnAndBearingWallDPCTotal) {
      totalDPC += columnAndBearingWallDPCTotal;
    }
    if (columnAndFoundationDPCTotal) {
      totalDPC += columnAndFoundationDPCTotal;
    }
    if (beamAndSlabDPCTotal) {
      totalDPC += beamAndSlabDPCTotal;
    }
    if (slabAndBearingWallDPCTotal) {
      totalDPC += slabAndBearingWallDPCTotal;
    }

    // Total connection types numbers score
    const totalConnectionTypeScore = calculateTotalScores(
      buildingCoreData,
      "connectionType"
    );

    // Total connection types numbers score
    const totalColumnAndSlabScore = calculateTotalScores(
      buildingCoreData,
      "columnAndSlab"
    );

    // Total connection accessibility numbers score
    const totalConnectionAccessibilityScore = calculateTotalScores(
      buildingCoreData,
      "connectionAccessibility"
    );

    // Total independency numbers score
    const totalIndependencyScore = calculateTotalScores(
      buildingCoreData,
      "independency"
    );

    // Total Gpe numbers score
    const totalGpeScore = calculateTotalScores(buildingCoreData, "gpe");
    // Total connection numbers score
    const connectionNumbers = calculateTotalScores(
      buildingCoreData,
      "connectionNumber"
    );

    const totalBarriersScore = calculateTotalScores(
      buildingCoreData,
      "barriers"
    );

    const totalBarriersNumbers = calculateTotalScores(
      buildingCoreData,
      "barriersNumber"
    );

    // setting total scores
    setTotalValue({
      ...totalValue,
      totalConnectionTypesScore: (totalConnectionTypeScore / 6) * 100,
      totalColumnAndSlabScore: (totalColumnAndSlabScore / 6) * 100,
      connectionAccessibilityScore:
        (totalConnectionAccessibilityScore / 6) * 100,
      totalGpeScore: (totalGpeScore / 6) * 100,
      totalIndependencyScore: (totalIndependencyScore / 6) * 100,
      totalConnectionNumberScore: connectionNumbers || 0,
      totalBarriersScore: (totalBarriersScore / 6) * 100,
      totalBarriersNumbers: totalBarriersNumbers,
      totalDPCOfBuildingCore: totalDPC || 0,
    });
  }, [buildingCoreData]);

  useEffect(() => {
    if (buildingCore) {
      setDPC(buildingCore);
    }
    if (buildingCoreInfo) {
      setBuildingCoreData(buildingCoreInfo);
    }
    // setting total scores
    if (buildingCoreTotalValue) {
      setTotalValue(buildingCoreTotalValue);
    }
  }, [buildingCore, buildingCoreInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBuildingCore(dpc));
    dispatch(addBuildingCoreInfo(buildingCoreData));
    dispatch(addBuildingCoreTotalValue(totalValue));
    navigate("/building-shell");
  };

  return (
    <div className="w-full px-10">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="flex gap-5 justify-between">
          <div className="flex-1 box-border text-center">Connection</div>
          <div className="flex-1 box-border text-center">Connection type</div>
          <div className="flex-1 box-border text-center">
            Connection Accessibility
          </div>
          <div className="flex-1 box-border text-center">Independency</div>
          <div className="flex-1 box-border text-center">
            Geometry of product edge of Element
          </div>
          <div className="w-[100px] box-border text-center">
            Connection number
          </div>
          <div className="flex-1 box-border text-center">Barriers</div>
          <div className="p-[10px] box-border text-center w-[100px]">
            Barriers number
          </div>
          <div className="flex-1 box-border text-center">
            Disassembly Potential of the Connection DPC
          </div>
        </div>

        <div className="flex gap-5 justify-between mb-20">
          <div className="flex-1 flex flex-col justify-between gap-4">
            <Button
              btnTitle="Column & Beam"
              className="!bg-[#F4B081] !px-3 grow"
            />
            <Button
              btnTitle="Column & Slab"
              className="!bg-[#F4B081] !px-3 grow"
            />
            <Button
              btnTitle="Column & Bearing wall"
              className="!bg-[#F4B081] !px-3 grow"
            />
            <Button
              btnTitle="Column & Foundation"
              className="!bg-[#F4B081] !px-3 grow"
            />
            <Button
              btnTitle="Beam & Slab"
              className="!bg-[#F4B081] !px-2 grow"
            />
            <Button
              btnTitle="Slab & Bearing wall"
              className="!bg-[#F4B081] !px-3 grow"
            />
          </div>

          {/* Connection Type  */}
          <div className="flex-1 flex flex-col gap-4 justify-between">
            <SelectDropdown
              contents={connectionType}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "columnAndBeam",
                attributeKey: "connectionType",
              }}
              defaultValue={
                buildingCoreInfo["columnAndBeam"]?.["connectionType"]
              }
              className="grow"
            />
            <SelectDropdown
              contents={connectionType}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "columnAndSlab",
                attributeKey: "connectionType",
              }}
              defaultValue={
                buildingCoreInfo["columnAndSlab"]?.["connectionType"]
              }
              className="grow"
            />
            <SelectDropdown
              contents={connectionType}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "columnAndBearingWall",
                attributeKey: "connectionType",
              }}
              defaultValue={
                buildingCoreInfo["columnAndBearingWall"]?.["connectionType"]
              }
              className="grow"
            />

            <SelectDropdown
              contents={connectionType}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "columnAndFoundation",
                attributeKey: "connectionType",
              }}
              defaultValue={
                buildingCoreInfo["columnAndFoundation"]?.["connectionType"]
              }
              className="grow"
            />
            <SelectDropdown
              contents={connectionType}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "beamAndSlab",
                attributeKey: "connectionType",
              }}
              defaultValue={buildingCoreInfo["beamAndSlab"]?.["connectionType"]}
              className="grow"
            />
            <SelectDropdown
              contents={connectionType}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "slabAndBearingWall",
                attributeKey: "connectionType",
              }}
              defaultValue={
                buildingCoreInfo["slabAndBearingWall"]?.["connectionType"]
              }
              className="grow"
            />
          </div>

          {/* Connection Accessibility */}
          <div className="flex-1 flex flex-col gap-4 justify-between">
            <SelectDropdown
              contents={connectionAccessibilityOptions}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "columnAndBeam",
                attributeKey: "connectionAccessibility",
              }}
              defaultValue={
                buildingCoreInfo["columnAndBeam"]?.["connectionAccessibility"]
              }
            />
            <SelectDropdown
              contents={connectionAccessibilityOptions}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "columnAndSlab",
                attributeKey: "connectionAccessibility",
              }}
              defaultValue={
                buildingCoreInfo["columnAndSlab"]?.["connectionAccessibility"]
              }
            />
            <SelectDropdown
              contents={connectionAccessibilityOptions}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "columnAndBearingWall",
                attributeKey: "connectionAccessibility",
              }}
              defaultValue={
                buildingCoreInfo["columnAndBearingWall"]?.[
                  "connectionAccessibility"
                ]
              }
            />
            <SelectDropdown
              contents={connectionAccessibilityOptions}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "columnAndFoundation",
                attributeKey: "connectionAccessibility",
              }}
              defaultValue={
                buildingCoreInfo["columnAndFoundation"]?.[
                  "connectionAccessibility"
                ]
              }
            />
            <SelectDropdown
              contents={connectionAccessibilityOptions}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "beamAndSlab",
                attributeKey: "connectionAccessibility",
              }}
              defaultValue={
                buildingCoreInfo["beamAndSlab"]?.["connectionAccessibility"]
              }
            />
            <SelectDropdown
              contents={connectionAccessibilityOptions}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "slabAndBearingWall",
                attributeKey: "connectionAccessibility",
              }}
              defaultValue={
                buildingCoreInfo["slabAndBearingWall"]?.[
                  "connectionAccessibility"
                ]
              }
            />
          </div>

          {/* Independency */}
          <div className="flex-1 flex flex-col gap-4 justify-between">
            <SelectDropdown
              contents={independency}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "columnAndBeam",
                attributeKey: "independency",
              }}
              defaultValue={buildingCoreInfo["columnAndBeam"]?.["independency"]}
            />
            <SelectDropdown
              contents={independency}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "columnAndSlab",
                attributeKey: "independency",
              }}
              defaultValue={buildingCoreInfo["columnAndSlab"]?.["independency"]}
            />
            <SelectDropdown
              contents={independency}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "columnAndBearingWall",
                attributeKey: "independency",
              }}
              defaultValue={
                buildingCoreInfo["columnAndBearingWall"]?.["independency"]
              }
            />
            <SelectDropdown
              contents={independency}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "columnAndFoundation",
                attributeKey: "independency",
              }}
              defaultValue={
                buildingCoreInfo["columnAndFoundation"]?.["independency"]
              }
            />
            <SelectDropdown
              contents={independency}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "beamAndSlab",
                attributeKey: "independency",
              }}
              defaultValue={buildingCoreInfo["beamAndSlab"]?.["independency"]}
            />
            <SelectDropdown
              contents={independency}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "slabAndBearingWall",
                attributeKey: "independency",
              }}
              defaultValue={
                buildingCoreInfo["slabAndBearingWall"]?.["independency"]
              }
            />
          </div>

          {/* Geometry of product edge of Element */}
          <div className="flex-1 flex flex-col gap-4 justify-between">
            <SelectDropdown
              contents={GeometryOfProductEdge}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "columnAndBeam",
                attributeKey: "gpe",
              }}
              defaultValue={buildingCoreInfo["columnAndBeam"]?.["gpe"]}
            />
            <SelectDropdown
              contents={GeometryOfProductEdge}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "columnAndSlab",
                attributeKey: "gpe",
              }}
              defaultValue={buildingCoreInfo["columnAndSlab"]?.["gpe"]}
            />
            <SelectDropdown
              contents={GeometryOfProductEdge}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "columnAndBearingWall",
                attributeKey: "gpe",
              }}
              defaultValue={buildingCoreInfo["columnAndBearingWall"]?.["gpe"]}
            />
            <SelectDropdown
              contents={GeometryOfProductEdge}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "columnAndFoundation",
                attributeKey: "gpe",
              }}
              defaultValue={buildingCoreInfo["columnAndFoundation"]?.["gpe"]}
            />
            <SelectDropdown
              contents={GeometryOfProductEdge}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "beamAndSlab",
                attributeKey: "gpe",
              }}
              defaultValue={buildingCoreInfo["beamAndSlab"]?.["gpe"]}
            />
            <SelectDropdown
              contents={GeometryOfProductEdge}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "slabAndBearingWall",
                attributeKey: "gpe",
              }}
              defaultValue={buildingCoreInfo["slabAndBearingWall"]?.["gpe"]}
            />
          </div>

          {/* Connection number */}
          <div className="w-[100px] flex flex-col gap-4 justify-between">
            <Input
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "columnAndBeam",
                attributeKey: "connectionNumber",
              }}
              defaultValue={
                buildingCoreInfo["columnAndBeam"]?.["connectionNumber"]
              }
            />
            <Input
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "columnAndSlab",
                attributeKey: "connectionNumber",
              }}
              defaultValue={
                buildingCoreInfo["columnAndSlab"]?.["connectionNumber"]
              }
            />
            <Input
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "columnAndBearingWall",
                attributeKey: "connectionNumber",
              }}
              defaultValue={
                buildingCoreInfo["columnAndBearingWall"]?.["connectionNumber"]
              }
            />
            <Input
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "columnAndFoundation",
                attributeKey: "connectionNumber",
              }}
              defaultValue={
                buildingCoreInfo["columnAndFoundation"]?.["connectionNumber"]
              }
            />
            <Input
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "beamAndSlab",
                attributeKey: "connectionNumber",
              }}
              defaultValue={
                buildingCoreInfo["beamAndSlab"]?.["connectionNumber"]
              }
            />
            <Input
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "slabAndBearingWall",
                attributeKey: "connectionNumber",
              }}
              defaultValue={
                buildingCoreInfo["slabAndBearingWall"]?.["connectionNumber"]
              }
            />
          </div>

          {/* Barriers */}
          <div className="flex-1 flex flex-col gap-4 justify-between">
            <SelectDropdown
              contents={barriers}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "columnAndBeam",
                attributeKey: "barriers",
              }}
              defaultValue={buildingCoreInfo["columnAndBeam"]?.["barriers"]}
            />
            <SelectDropdown
              contents={barriers}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "columnAndSlab",
                attributeKey: "barriers",
              }}
              defaultValue={buildingCoreInfo["columnAndSlab"]?.["barriers"]}
            />
            <SelectDropdown
              contents={barriers}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "columnAndBearingWall",
                attributeKey: "barriers",
              }}
              defaultValue={
                buildingCoreInfo["columnAndBearingWall"]?.["barriers"]
              }
            />
            <SelectDropdown
              contents={barriers}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "columnAndFoundation",
                attributeKey: "barriers",
              }}
              defaultValue={
                buildingCoreInfo["columnAndFoundation"]?.["barriers"]
              }
            />
            <SelectDropdown
              contents={barriers}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "beamAndSlab",
                attributeKey: "barriers",
              }}
              defaultValue={buildingCoreInfo["beamAndSlab"]?.["barriers"]}
            />
            <SelectDropdown
              contents={barriers}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "slabAndBearingWall",
                attributeKey: "barriers",
              }}
              defaultValue={
                buildingCoreInfo["slabAndBearingWall"]?.["barriers"]
              }
            />
          </div>

          {/* Barriers number */}
          <div className="w-[100px] flex flex-col gap-4 justify-between">
            <Input
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "columnAndBeam",
                attributeKey: "barriersNumber",
              }}
              defaultValue={
                buildingCoreInfo["columnAndBeam"]?.["barriersNumber"]
              }
            />
            <Input
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "columnAndSlab",
                attributeKey: "barriersNumber",
              }}
              defaultValue={
                buildingCoreInfo["columnAndSlab"]?.["barriersNumber"]
              }
            />
            <Input
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "columnAndBearingWall",
                attributeKey: "barriersNumber",
              }}
              defaultValue={
                buildingCoreInfo["columnAndBearingWall"]?.["barriersNumber"]
              }
            />
            <Input
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "columnAndFoundation",
                attributeKey: "barriersNumber",
              }}
              defaultValue={
                buildingCoreInfo["columnAndFoundation"]?.["barriersNumber"]
              }
            />
            <Input
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "beamAndSlab",
                attributeKey: "barriersNumber",
              }}
              defaultValue={buildingCoreInfo["beamAndSlab"]?.["barriersNumber"]}
            />
            <Input
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "slabAndBearingWall",
                attributeKey: "barriersNumber",
              }}
              defaultValue={
                buildingCoreInfo["slabAndBearingWall"]?.["barriersNumber"]
              }
            />
          </div>

          {/* Disassembly Potential of the Connection DPC */}
          <div className="flex-1 flex flex-col gap-4 justify-between">
            <div className="h-full font-semibold py-[7px] border-2 border-black bg-[#E1EFD8] !px-3 grow">
              <span>
                {isNaN(totalColumnAndBeamDPC)
                  ? ""
                  : Number(totalColumnAndBeamDPC)?.toFixed(0)}
              </span>
            </div>

            <div className="h-full font-semibold py-[7px] border-2 border-black bg-[#E1EFD8] !px-3 grow">
              <span>
                {isNaN(totalColumnAndSlabDPC)
                  ? ""
                  : Number(totalColumnAndSlabDPC)?.toFixed(0)}
              </span>
            </div>

            <div className="h-full font-semibold py-[7px] border-2 border-black bg-[#E1EFD8] !px-3 grow">
              <span>
                {isNaN(totalColumnAndBearingWallDPC)
                  ? ""
                  : Number(totalColumnAndBearingWallDPC)?.toFixed(0)}
              </span>
            </div>

            <div className="h-full font-semibold py-[7px] border-2 border-black bg-[#E1EFD8] !px-3 grow">
              <span>
                {isNaN(totalColumnAndFoundationDPC)
                  ? ""
                  : Number(totalColumnAndFoundationDPC)?.toFixed(0)}
              </span>
            </div>

            <div className="h-full font-semibold py-[7px] border-2 border-black bg-[#E1EFD8] !px-3 grow">
              <span>
                {isNaN(totalBeamAndSlabDPC)
                  ? ""
                  : Number(totalBeamAndSlabDPC)?.toFixed(0)}
              </span>
            </div>

            <div className="h-full font-semibold py-[7px] border-2 border-black bg-[#E1EFD8] !px-3 grow">
              <span>
                {isNaN(totalSlabAndBearingWallDPC)
                  ? ""
                  : Number(totalSlabAndBearingWallDPC)?.toFixed(0)}
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-[60px] justify-between">
          <Charts
            color="#4472C4"
            title="Disassembly potential of the core connections DPC"
            data={[
              {
                x: "Column and beam",
                y: isNaN(totalColumnAndBeamDPC)
                  ? 0
                  : Number(totalColumnAndBeamDPC)?.toFixed(0),
              },
              {
                x: "Column and slab",
                y: isNaN(totalColumnAndSlabDPC)
                  ? 0
                  : Number(totalColumnAndSlabDPC)?.toFixed(0),
              },
              {
                x: "Column and bearing wall",
                y: totalColumnAndBearingWallDPC || 0,
              },
              {
                x: "Column and foundation",
                y: isNaN(totalColumnAndFoundationDPC)
                  ? 0
                  : Number(totalColumnAndFoundationDPC)?.toFixed(0),
              },
              {
                x: "Beam and slab",
                y: isNaN(totalBeamAndSlabDPC)
                  ? 0
                  : Number(totalBeamAndSlabDPC)?.toFixed(0),
              },
              {
                x: "Slab and bearing wall",
                y: isNaN(totalSlabAndBearingWallDPC)
                  ? 0
                  : Number(totalSlabAndBearingWallDPC)?.toFixed(0),
              },
            ]}
            max={100}
          />
          <Charts
            color="#F4B081"
            title="Disassembly potential of the core connections DPC based on the DfD criteria and barriers"
            data={[
              {
                x: "Connection type",
                y: parseFloat(totalConnectionTypesScore)?.toFixed(0) || 0,
              },
              {
                x: "Connection accessibility",
                y: parseFloat(connectionAccessibilityScore)?.toFixed(0) || 0,
              },
              {
                x: "Independency",
                y: parseFloat(totalIndependencyScore)?.toFixed(0) || 0,
              },
              {
                x: "Geometry of product edge",
                y: parseFloat(totalGpeScore)?.toFixed(0) || 0,
              },
              {
                x: "Barriers",
                y: parseFloat(totalBarriersScore)?.toFixed(0) || 0,
              },
            ]}
            max={100}
          />
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-4">
              <ProgressBar
                progress={
                  parseFloat(totalDPCOfBuildingCore / 6)?.toFixed(2) || 0
                }
              />
              <Button
                btnTitle={`Total core connections: ${totalConnectionNumberScore}`}
                className="!text-left text-base !px-2 !bg-[#D5DBE5]"
              />
              <Button
                btnTitle={`Total DPC of the building’s core: ${parseFloat(
                  totalDPCOfBuildingCore / 6
                )?.toFixed(2)}`}
                className="!text-left text-base !px-2"
              />
            </div>
            <div className="w-full flex items-center gap-5">
              <Link to={"/constructions-type"}>
                <Button btnTitle="Previous" />
              </Link>
              {/* <Link to="/building-shell">
							</Link> */}
              <Button btnTitle="Next" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
