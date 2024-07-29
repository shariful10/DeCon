import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  addBuildingShell,
  addBuildingShellInfo,
  addBuildingShellTotalValue,
} from "../redux/features/buildingShellSlice";
import Input from "../components/Input/Input";
import Charts from "../components/Chart/Chart";
import { useNavigate } from "react-router-dom";
import Button from "../components/utils/Button";
import ProgressBar from "../components/utils/ProgressBar";
import SelectDropdown from "../components/Select/SelectDropdown";
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

  const { buildingShell } = useSelector((state) => state.buildingShell);
  const { buildingShellInfo } = useSelector((state) => state.buildingShell);
  const buildingShellTotalValue = useSelector(
    (state) => state.buildingShellTotalValue
  );

  const [buildingCoreData, setBuildingCoreData] = useState({
    columnAndShellElement: {},
    beamAndShellElement: {},
    slabAndShellElement: {},
    bearingWallAndShellElement: {},
  });

  const [dpc, setDPC] = useState({
    columnAndShellElementDPC: "",
    beamAndShellElementDPC: "",
    slabAndShellElementDPC: "",
    bearingWallAndShellElementDPC: "",
  });

  const {
    columnAndShellElementDPC,
    beamAndShellElementDPC,
    slabAndShellElementDPC,
    bearingWallAndShellElementDPC,
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

  const totalColumnAndShellElementDPC =
    isNaN(columnAndShellElementDPC) ||
    columnAndShellElementDPC == null ||
    columnAndShellElementDPC === ""
      ? buildingShell[columnAndShellElementDPC]?.toFixed(0) || ""
      : parseFloat(columnAndShellElementDPC)?.toFixed(2) || "";

  const totalBeamAndShellElementDPC =
    isNaN(beamAndShellElementDPC) ||
    beamAndShellElementDPC == null ||
    beamAndShellElementDPC === ""
      ? buildingShell[beamAndShellElementDPC]?.toFixed(0) || ""
      : parseFloat(beamAndShellElementDPC)?.toFixed(2) || "";

  const totalSlabAndShellElementDPC =
    isNaN(slabAndShellElementDPC) ||
    slabAndShellElementDPC == null ||
    slabAndShellElementDPC === ""
      ? buildingShell[slabAndShellElementDPC]?.toFixed(0) || ""
      : parseFloat(slabAndShellElementDPC)?.toFixed(2) || "";

  const totalBearingWallAndShellElementDPC =
    isNaN(bearingWallAndShellElementDPC) ||
    bearingWallAndShellElementDPC == null ||
    bearingWallAndShellElementDPC === ""
      ? buildingShell[bearingWallAndShellElementDPC]?.toFixed(0) || ""
      : parseFloat(bearingWallAndShellElementDPC)?.toFixed(2) || "";

  useEffect(() => {
    let columnAndShellElementDPC;
    let beamAndShellElementDPC;
    let slabAndShellElementDPC;
    let bearingWallAndShellElementDPC;
    let totalDPC = 0;

    // Column and beam calculation
    if (buildingCoreData["columnAndShellElement"]) {
      const totalValue = calculateDPC(
        buildingCoreData["columnAndShellElement"]
      );
      columnAndShellElementDPC = totalValue;
    }

    // Column and slab calculation
    if (buildingCoreData["beamAndShellElement"]) {
      const totalValue = calculateDPC(buildingCoreData["beamAndShellElement"]);
      beamAndShellElementDPC = totalValue;
    }

    // Column and bearing calculation
    if (buildingCoreData["slabAndShellElement"]) {
      const totalValue = calculateDPC(buildingCoreData["slabAndShellElement"]);
      slabAndShellElementDPC = totalValue;
    }
    // Column and foundation calculation
    if (buildingCoreData["bearingWallAndShellElement"]) {
      const totalValue = calculateDPC(
        buildingCoreData["bearingWallAndShellElement"]
      );
      bearingWallAndShellElementDPC = totalValue;
    }

    setDPC({
      ...dpc,
      columnAndShellElementDPC,
      beamAndShellElementDPC,
      slabAndShellElementDPC,
      bearingWallAndShellElementDPC,
    });

    let columnAndShellElementDPCTotal =
      columnAndShellElementDPC || buildingShell["columnAndShellElementDPC"];
    let beamAndShellElementDPCTotal =
      beamAndShellElementDPC || buildingShell["beamAndShellElementDPC"];
    let slabAndShellElementDPCTotal =
      slabAndShellElementDPC || buildingShell["slabAndShellElementDPC"];
    let bearingWallAndShellElementDPCTotal =
      bearingWallAndShellElementDPC ||
      buildingShell["bearingWallAndShellElementDPC"];

    if (columnAndShellElementDPCTotal) {
      totalDPC += columnAndShellElementDPCTotal;
    }
    if (beamAndShellElementDPCTotal) {
      totalDPC += beamAndShellElementDPCTotal;
    }
    if (slabAndShellElementDPCTotal) {
      totalDPC += slabAndShellElementDPCTotal;
    }
    if (bearingWallAndShellElementDPCTotal) {
      totalDPC += bearingWallAndShellElementDPCTotal;
    }

    // Total connection types numbers score
    const totalConnectionTypeScore = calculateTotalScores(
      buildingCoreData,
      "connectionType"
    );

    // Total connection types numbers score
    const totalColumnAndSlabScore = calculateTotalScores(
      buildingCoreData,
      "beamAndShellElement"
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
      totalConnectionTypesScore: (totalConnectionTypeScore / 4) * 100,
      totalColumnAndSlabScore: (totalColumnAndSlabScore / 4) * 100,
      connectionAccessibilityScore:
        (totalConnectionAccessibilityScore / 4) * 100,
      totalGpeScore: (totalGpeScore / 4) * 100,
      totalIndependencyScore: (totalIndependencyScore / 4) * 100,
      totalConnectionNumberScore: connectionNumbers || 0,
      totalBarriersScore: (totalBarriersScore / 4) * 100,
      totalBarriersNumbers: totalBarriersNumbers,
      totalDPCOfBuildingCore: totalDPC || 0,
    });
  }, [buildingCoreData]);

  useEffect(() => {
    if (buildingShell) {
      setDPC(buildingShell);
    }
    if (buildingShellInfo) {
      setBuildingCoreData(buildingShellInfo);
    }
    // setting total scores
    if (buildingShellTotalValue) {
      setTotalValue(buildingShellTotalValue);
    }
  }, [buildingShell, buildingShellInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBuildingShell(dpc));
    dispatch(addBuildingShellInfo(buildingCoreData));
    dispatch(addBuildingShellTotalValue(totalValue));
    navigate("/result-and-report");
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
          <div className="flex-1 flex flex-col gap-4 justify-between">
            <Button
              btnTitle="Column & Shell element"
              className="!bg-[#F4B081] !px-3 grow !text-[14px]"
            />
            <Button
              btnTitle="Beam & Shell element"
              className="!bg-[#F4B081] !px-3 grow"
            />
            <Button
              btnTitle="Slab & Shell element"
              className="!bg-[#F4B081] !px-3 grow"
            />
            <Button
              btnTitle="Bearing wall & Shell element"
              className="!bg-[#F4B081] !px-3 grow !text-[13px]"
            />
          </div>

          {/* Connection Type  */}
          <div className="flex-1 flex flex-col gap-4 justify-between">
            <SelectDropdown
              contents={connectionType}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "columnAndShellElement",
                attributeKey: "connectionType",
              }}
              defaultValue={
                buildingShellInfo["columnAndShellElement"]?.["connectionType"]
              }
            />
            <SelectDropdown
              contents={connectionType}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "beamAndShellElement",
                attributeKey: "connectionType",
              }}
              defaultValue={
                buildingShellInfo["beamAndShellElement"]?.["connectionType"]
              }
            />
            <SelectDropdown
              contents={connectionType}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "slabAndShellElement",
                attributeKey: "connectionType",
              }}
              defaultValue={
                buildingShellInfo["slabAndShellElement"]?.["connectionType"]
              }
            />

            <SelectDropdown
              contents={connectionType}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "bearingWallAndShellElement",
                attributeKey: "connectionType",
              }}
              defaultValue={
                buildingShellInfo["bearingWallAndShellElement"]?.[
                  "connectionType"
                ]
              }
            />
          </div>

          {/* Connection Accessibility  */}
          <div className="flex-1 flex flex-col gap-4 justify-between">
            <SelectDropdown
              contents={connectionAccessibilityOptions}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "columnAndShellElement",
                attributeKey: "connectionAccessibility",
              }}
              defaultValue={
                buildingShellInfo["columnAndShellElement"]?.[
                  "connectionAccessibility"
                ]
              }
            />
            <SelectDropdown
              contents={connectionAccessibilityOptions}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "beamAndShellElement",
                attributeKey: "connectionAccessibility",
              }}
              defaultValue={
                buildingShellInfo["beamAndShellElement"]?.[
                  "connectionAccessibility"
                ]
              }
            />
            <SelectDropdown
              contents={connectionAccessibilityOptions}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "slabAndShellElement",
                attributeKey: "connectionAccessibility",
              }}
              defaultValue={
                buildingShellInfo["slabAndShellElement"]?.[
                  "connectionAccessibility"
                ]
              }
            />
            <SelectDropdown
              contents={connectionAccessibilityOptions}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "bearingWallAndShellElement",
                attributeKey: "connectionAccessibility",
              }}
              defaultValue={
                buildingShellInfo["bearingWallAndShellElement"]?.[
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
                connectionName: "columnAndShellElement",
                attributeKey: "independency",
              }}
              defaultValue={
                buildingShellInfo["columnAndShellElement"]?.["independency"]
              }
            />
            <SelectDropdown
              contents={independency}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "beamAndShellElement",
                attributeKey: "independency",
              }}
              defaultValue={
                buildingShellInfo["beamAndShellElement"]?.["independency"]
              }
            />
            <SelectDropdown
              contents={independency}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "slabAndShellElement",
                attributeKey: "independency",
              }}
              defaultValue={
                buildingShellInfo["slabAndShellElement"]?.["independency"]
              }
            />
            <SelectDropdown
              contents={independency}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "bearingWallAndShellElement",
                attributeKey: "independency",
              }}
              defaultValue={
                buildingShellInfo["bearingWallAndShellElement"]?.[
                  "independency"
                ]
              }
            />
          </div>

          {/* Geometry of product edge of Element */}
          <div className="flex-1 flex flex-col gap-4 justify-between">
            <SelectDropdown
              contents={GeometryOfProductEdge}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "columnAndShellElement",
                attributeKey: "gpe",
              }}
              defaultValue={buildingShellInfo["columnAndShellElement"]?.["gpe"]}
            />
            <SelectDropdown
              contents={GeometryOfProductEdge}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "beamAndShellElement",
                attributeKey: "gpe",
              }}
              defaultValue={buildingShellInfo["beamAndShellElement"]?.["gpe"]}
            />
            <SelectDropdown
              contents={GeometryOfProductEdge}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "slabAndShellElement",
                attributeKey: "gpe",
              }}
              defaultValue={buildingShellInfo["slabAndShellElement"]?.["gpe"]}
            />
            <SelectDropdown
              contents={GeometryOfProductEdge}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "bearingWallAndShellElement",
                attributeKey: "gpe",
              }}
              defaultValue={
                buildingShellInfo["bearingWallAndShellElement"]?.["gpe"]
              }
            />
          </div>

          {/* Connection number */}
          <div className="w-[100px] flex flex-col gap-4 justify-between">
            <Input
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "columnAndShellElement",
                attributeKey: "connectionNumber",
              }}
              defaultValue={
                buildingShellInfo["columnAndShellElement"]?.["connectionNumber"]
              }
            />
            <Input
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "beamAndShellElement",
                attributeKey: "connectionNumber",
              }}
              defaultValue={
                buildingShellInfo["beamAndShellElement"]?.["connectionNumber"]
              }
            />
            <Input
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "slabAndShellElement",
                attributeKey: "connectionNumber",
              }}
              defaultValue={
                buildingShellInfo["slabAndShellElement"]?.["connectionNumber"]
              }
            />
            <Input
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "bearingWallAndShellElement",
                attributeKey: "connectionNumber",
              }}
              defaultValue={
                buildingShellInfo["bearingWallAndShellElement"]?.[
                  "connectionNumber"
                ]
              }
            />
          </div>

          {/* Barriers */}
          <div className="flex-1 flex flex-col gap-4 justify-between">
            <SelectDropdown
              contents={barriers}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "columnAndShellElement",
                attributeKey: "barriers",
              }}
              defaultValue={
                buildingShellInfo["columnAndShellElement"]?.["barriers"]
              }
            />
            <SelectDropdown
              contents={barriers}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "beamAndShellElement",
                attributeKey: "barriers",
              }}
              defaultValue={
                buildingShellInfo["beamAndShellElement"]?.["barriers"]
              }
            />
            <SelectDropdown
              contents={barriers}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "slabAndShellElement",
                attributeKey: "barriers",
              }}
              defaultValue={
                buildingShellInfo["slabAndShellElement"]?.["barriers"]
              }
            />
            <SelectDropdown
              contents={barriers}
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "bearingWallAndShellElement",
                attributeKey: "barriers",
              }}
              defaultValue={
                buildingShellInfo["bearingWallAndShellElement"]?.["barriers"]
              }
            />
          </div>

          {/* Barriers number */}
          <div className="w-[100px] flex flex-col gap-4 justify-between">
            <Input
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "columnAndShellElement",
                attributeKey: "barriersNumber",
              }}
              defaultValue={
                buildingShellInfo["columnAndShellElement"]?.["barriersNumber"]
              }
            />
            <Input
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "beamAndShellElement",
                attributeKey: "barriersNumber",
              }}
              defaultValue={
                buildingShellInfo["beamAndShellElement"]?.["barriersNumber"]
              }
            />
            <Input
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "slabAndShellElement",
                attributeKey: "barriersNumber",
              }}
              defaultValue={
                buildingShellInfo["slabAndShellElement"]?.["barriersNumber"]
              }
            />
            <Input
              handleSetData={handleSetData}
              attributesValue={{
                connectionName: "bearingWallAndShellElement",
                attributeKey: "barriersNumber",
              }}
              defaultValue={
                buildingShellInfo["bearingWallAndShellElement"]?.[
                  "barriersNumber"
                ]
              }
            />
          </div>

          {/* Disassembly Potential of the Connection DPC */}
          <div className="flex-1 flex flex-col gap-4 justify-between">
            <div className="h-full font-semibold py-[7px] border-2 border-black bg-[#E1EFD8] !px-3 grow">
              <span>
                {isNaN(totalColumnAndShellElementDPC)
                  ? ""
                  : Number(totalColumnAndShellElementDPC)}
              </span>
            </div>

            <div className="h-full font-semibold py-[7px] border-2 border-black bg-[#E1EFD8] !px-3 grow">
              <span>
                {isNaN(totalBeamAndShellElementDPC)
                  ? ""
                  : Number(totalBeamAndShellElementDPC)}
              </span>
            </div>

            <div className="h-full font-semibold py-[7px] border-2 border-black bg-[#E1EFD8] !px-3 grow">
              <span>
                {isNaN(totalSlabAndShellElementDPC)
                  ? ""
                  : Number(totalSlabAndShellElementDPC)}
              </span>
            </div>

            <div className="h-full font-semibold py-[7px] border-2 border-black bg-[#E1EFD8] !px-3 grow">
              <span>
                {isNaN(totalBearingWallAndShellElementDPC)
                  ? ""
                  : Number(totalBearingWallAndShellElementDPC)}
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-[60px] justify-between">
          <Charts
            color="#4472C4"
            title="Disassembly potential of the shell connections DPC"
            data={[
              {
                x: "Column & Shell element",
                y: isNaN(totalColumnAndShellElementDPC)
                  ? 0
                  : Number(totalColumnAndShellElementDPC)?.toFixed(0),
              },
              {
                x: "Beam & Shell element",
                y: isNaN(totalBeamAndShellElementDPC)
                  ? 0
                  : Number(totalBeamAndShellElementDPC)?.toFixed(0),
              },
              {
                x: "Slab & Shell element",
                y: isNaN(totalSlabAndShellElementDPC)
                  ? 0
                  : Number(totalSlabAndShellElementDPC)?.toFixed(0),
              },
              {
                x: "Bearing wall & Shell element",
                y: isNaN(totalBearingWallAndShellElementDPC)
                  ? 0
                  : Number(totalBearingWallAndShellElementDPC)?.toFixed(0),
              },
            ]}
            max={100}
          />
          <Charts
            color="#F4B081"
            title="Disassembly potential of the shell connections DPC based on the DfD criteria and barriers"
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
                  parseFloat(totalDPCOfBuildingCore / 4)?.toFixed(2) || 0
                }
              />
              <Button
                btnTitle={`Total shell connections: ${totalConnectionNumberScore}`}
                className="!text-left text-base !px-2 !bg-[#D5DBE5]"
              />
              <Button
                btnTitle={`Total DPC of the building’s shell: ${parseFloat(
                  totalDPCOfBuildingCore / 4
                )?.toFixed(2)}`}
                className="!text-left text-base !px-2"
              />
            </div>
            <div className="w-full flex items-center gap-5">
              <Link to={"/building-core"}>
                <Button btnTitle="Previous" />
              </Link>
              {/* <Link to="/result-and-report">
							</Link> */}
              <Button type="submit" btnTitle="Next" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
