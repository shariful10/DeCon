import React, { useEffect, useState } from "react";
import SelectDropdown from "../components/Select/SelectDropdown";
import Button from "../components/utils/Button";
import Input from "../components/Input/Input";
import Charts from "../components/Chart/Chart";
import { Link } from "react-router-dom";
import ProgressBar from "../components/utils/ProgressBar";

export default function BuildingCore() {
  const [buildingCoreData, setBuildingCoreData] = useState({
    columnAndBeam: {},
    columnAndBearingWall: {},
    columnAndFoundation: {},
    columnAndSlab: {},
    slabAndBearingWall: {},
  });
  const [dpc, setDPC] = useState({
    columnAndBeamDPC: "",
    columnAndBearingWallDPC: "",
    columnAndFoundationDPC: "",
    columnAndSlabDPC: "",
    slabAndBearingWallDPC: "",
  });

  const {
    columnAndBeamDPC,
    columnAndBearingWallDPC,
    columnAndFoundationDPC,
    columnAndSlabDPC,
    slabAndBearingWallDPC,
  } = dpc;

  const [totalValue, setTotalValue] = useState({
    totalCoreConnections: "",
    totalDPCOfBuildingCore: "",
  });

  const { totalCoreConnections, totalDPCOfBuildingCore } = totalValue;

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

  const connectionAccessibility = [
    {
      label: "Connection accessibility",
      value: "connection_accessibility",
      options: [
        {
          label: "Freely accessible without additional actions",
          value: "freely_accessible_without_additional_actions",
          score: 1.0,
        },
        {
          label: "Accessible with additional actions that do not cause damage",
          value: "accessible_with_additional_actions_that_do_not_cause_damage",
          score: 0.8,
        },
        {
          label:
            "Accessible with additional actions with fully repairable damage",
          value:
            "accessible_with_additional_actions_with fully_repairable_damage",
          score: 0.6,
        },
        {
          label:
            "Accessible with additional actions with partially repairable damage",
          value:
            "accessible_with_additional_actions_with_partially_repairable_damage",
          score: 0.4,
        },
      ],
    },
  ];

  const independency = [
    {
      label: "Independency",
      value: "independency",
      options: [
        {
          label:
            "No independency - modular zoning of products or elements from different layers",
          value:
            "no_independency_modular_zoning_of_products_or_elements_from_different_layers",
          score: 1.0,
        },
        {
          label:
            "Occasional independency of products or elements from different layers",
          value:
            "occasional_independency_of_products_or_elements_from_different_layers",
          score: 0.4,
        },
        {
          label:
            "Full integration of products or elements from different layers",
          value:
            "full_integration_of_products_or_elements_from_different_layers",
          score: 0.1,
        },
      ],
    },
  ];

  const GeometryOfProductEdge = [
    {
      label: "Geometry of product edge",
      value: "geometry_of_product_edge",
      options: [
        {
          label:
            "Open, no obstacle to the (interim) removal of products or elements",
          value:
            "open_no_obstacle_to_the_(interim)_removal_of_products_or_elements",
          score: 1.0,
        },
        {
          label:
            "Overlapping, partial obstruction to the (interim) removal of products or elements",
          value:
            "overlapping_partial_obstruction_to_the_interim_removal_of_products_or_elements",
          score: 0.4,
        },
        {
          label:
            "Closed, complete obstruction to the (interim) removal of products or elements",
          value:
            "closed_complete_obstruction_to_the_interim_removal_of_products_or_elements",
          score: 0.1,
        },
      ],
    },
  ];

  const barriers = [
    {
      label: "Design barriers",
      value: "design_barriers",
      options: [
        {
          label: "Design errors",
          value: "design_errors",
          score: 0.1,
        },
        {
          label: "Incompatible, omitted, or unsuitable choice of materials",
          value: "incompatible_omitted_unsuitable_choice_of_materials",
          score: 0.1,
        },
        {
          label: "Incorrect design of the connections",
          value: "incorrect_design_of_the_connections",
          score: 0.1,
        },
        {
          label: "Areas inaccessible to disassembly",
          value: "areas_inaccessible_to_disassembly",
          score: 0.1,
        },
        {
          label: "Deficient care in detailing connections",
          value: "deficient_care_in_detailing_connections",
          score: 0.1,
        },
        {
          label: "Defect in peripheral elements",
          value: "defect_in_peripheral_elements",
          score: 0.1,
        },
        {
          label: "Excessive deformations",
          value: "excessive_deformations",
          score: 0.1,
        },
      ],
    },
    {
      label: "Execution errors",
      value: "execution_errors",
      options: [
        {
          label: "Use of non-prescribed and/or incompatible materials",
          value: "use_of_non_prescribed_and_or_incompatible_materials",
          score: 0.08,
        },
        {
          label: "Application in extreme environmental conditions",
          value: "application_in_extreme_environmental_conditions",
          score: 0.08,
        },
        {
          label: "Disregard the connection's default lifespan",
          value: "disregard_the_connections_default_lifespan",
          score: 0.08,
        },
        {
          label: "Use of misplaced connections",
          value: "use_of_misplaced_connections",
          score: 0.08,
        },
        {
          label: "Incomplete contact between the elements",
          value: "incomplete_contact_between_the_elements",
          score: 0.08,
        },
        {
          label: "Joints of insufficient width or depth/missing joints",
          value: "joints_of_insufficient_width_or_depth_missing_joints",
          score: 0.08,
        },
        {
          label: "Metal accessories unprotected in the connections",
          value: "metal_accessories_unprotected_in_the_connections",
          score: 0.08,
        },
        {
          label: "Lack of maintenance",
          value: "lack_of_maintenance",
          score: 0.08,
        },
      ],
    },
    {
      label: "Accidental actions",
      value: "accidental_actions",
      options: [
        {
          label: "Vandalism",
          value: "vandalism",
          score: 0.06,
        },
        {
          label: "Stress concentration on the connections",
          value: "stress_concentration_on_the_connections",
          score: 0.06,
        },
        {
          label: "Deformation",
          value: "deformation",
          score: 0.06,
        },
        {
          label: "Fire and burnt connections",
          value: "fire_and_burnt_connections",
          score: 0.06,
        },
      ],
    },
    {
      label: "Environmental actions",
      value: "environmental_actions",
      options: [
        {
          label: "Damp within connections",
          value: "damp_within_connections",
          score: 0.04,
        },
        {
          label: "Mold within connections",
          value: "mold_within_connections",
          score: 0.04,
        },
        {
          label: "Water leakage inside the connections",
          value: "water_leakage_inside_the_connections",
          score: 0.04,
        },
        {
          label: "Biological action",
          value: "biological_action",
          score: 0.04,
        },
        {
          label: "Air pollution",
          value: "air_pollution",
          score: 0.04,
        },
      ],
    },
    {
      label: "Management issues",
      value: "management_issues",
      options: [
        {
          label:
            "Rules or standards to organize the construction of reused materials or elements",
          value:
            "rules_or_standards_to_organize_the_construction_of_reused_materials_or_elements",
          score: 0.02,
        },
        {
          label:
            "Limited demand for reusing materials in the construction market",
          value:
            "limited_demand_for_reusing_materials_in_the_construction_market",
          score: 0.02,
        },
        {
          label: "Deconstruction time compared to mechanical demolition",
          value: "deconstruction_time_compared_to_mechanical_demolition",
          score: 0.02,
        },
        {
          label: "Deconstruction costs compared to mechanical demolition",
          value: "deconstruction_costs_compared_to_mechanical_demolition",
          score: 0.02,
        },
        {
          label: "Deconstruction contractual issues",
          value: "deconstruction_contractual_issues",
          score: 0.02,
        },
        {
          label:
            "Manufacturers' lack of interest and responsibility in reducing waste",
          value:
            "manufacturers_lack_of_interest_and_responsibility_in_reducing_waste",
          score: 0.02,
        },
      ],
    },
  ];

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

  useEffect(() => {
    let columnAndBeamDPC;
    let columnAndBearingWallDPC = "";
    let columnAndFoundationDPC = "";
    let columnAndSlabDPC = "";
    let slabAndBearingWallDPC = "";
    let connectionNumbers = "";
    // Column and beam calculation
    if (buildingCoreData["columnAndBeam"]) {
      // EQ One
      const CTn =
        buildingCoreData["columnAndBeam"]?.["connectionType"]?.["score"] || 0;
      const CAn =
        buildingCoreData["columnAndBeam"]?.["connectionAccessibility"]?.[
          "score"
        ] || 0;
      // EQ Two
      const IDn =
        buildingCoreData["columnAndBeam"]?.["independency"]?.["score"] || 0;
      const GPEn = buildingCoreData["columnAndBeam"]?.["gpe"]?.["score"] || 0;
      // EQ Three
      const barriersScore =
        buildingCoreData["columnAndBeam"]?.["barriers"]?.["score"] || 0;
      const barriersNumber =
        buildingCoreData["columnAndBeam"]?.["barriersNumber"] || 0;

      // Total calculation
      const DividedCTn = 1 / CTn;
      const DividedCAn = 1 / CAn;
      const DividedIDn = 1 / IDn;
      const DividedGPEn = 1 / GPEn;
      const DBn = barriersScore * barriersNumber || 0;

      const DPcnTotalValue = DividedCTn + DividedCAn;
      const DPcenTotalValue = DividedIDn + DividedGPEn;

      const DPcn = 2 / DPcnTotalValue;
      const DPcen = 2 / DPcenTotalValue;
      const DPCSliceOne = 1 / DPcn;
      const DPCSliceTwo = 1 / DPcen;
      const DPCSlice = DPCSliceOne + DPCSliceTwo;
      const DPCSliceResult = 2 / DPCSlice;
      columnAndBeamDPC = DPCSliceResult - DBn;
      if (columnAndBeamDPC) {
        setDPC({
          ...dpc,
          columnAndBeamDPC: columnAndBeamDPC,
        });
      }
    }

    if (buildingCoreData["columnAndBearingWall"]) {
      // EQ One
      const CTn =
        buildingCoreData["columnAndBearingWall"]?.["connectionType"]?.[
          "score"
        ] || 0;
      const CAn =
        buildingCoreData["columnAndBearingWall"]?.["connectionAccessibility"]?.[
          "score"
        ] || 0;
      // EQ Two
      const IDn =
        buildingCoreData["columnAndBearingWall"]?.["independency"]?.["score"] ||
        0;
      const GPEn =
        buildingCoreData["columnAndBearingWall"]?.["gpe"]?.["score"] || 0;
      // EQ Three
      const barriersScore =
        buildingCoreData["columnAndBearingWall"]?.["barriers"]?.["score"] || 0;
      const barriersNumber =
        buildingCoreData["columnAndBearingWall"]?.["barriersNumber"] || 0;

      // Total calculation
      const DividedCTn = 1 / CTn;
      const DividedCAn = 1 / CAn;
      const DividedIDn = 1 / IDn;
      const DividedGPEn = 1 / GPEn;
      const DBn = barriersScore * barriersNumber;

      const DPcnTotalValue = DividedCTn + DividedCAn;
      const DPcenTotalValue = DividedIDn + DividedGPEn;

      const DPcn = 2 / DPcnTotalValue;
      const DPcen = 2 / DPcenTotalValue;
      const DPCSliceOne = 1 / DPcn;
      const DPCSliceTwo = 1 / DPcen;
      const DPCSlice = DPCSliceOne + DPCSliceTwo;
      const DPCSliceResult = 2 / DPCSlice;
      columnAndBearingWallDPC = DPCSliceResult - DBn;
      if (columnAndBearingWallDPC) {
        setDPC({
          ...dpc,
          columnAndBearingWallDPC: columnAndBearingWallDPC,
        });
      }
    }

    if (buildingCoreData["columnAndFoundation"]) {
      // EQ One
      const CTn =
        buildingCoreData["columnAndFoundation"]?.["connectionType"]?.[
          "score"
        ] || 0;
      const CAn =
        buildingCoreData["columnAndFoundation"]?.["connectionAccessibility"]?.[
          "score"
        ] || 0;
      // EQ Two
      const IDn =
        buildingCoreData["columnAndFoundation"]?.["independency"]?.["score"] ||
        0;
      const GPEn =
        buildingCoreData["columnAndFoundation"]?.["gpe"]?.["score"] || 0;
      // EQ Three
      const barriersScore =
        buildingCoreData["columnAndFoundation"]?.["barriers"]?.["score"] || 0;
      const barriersNumber =
        buildingCoreData["columnAndFoundation"]?.["barriersNumber"] || 0;

      // Total calculation
      const DividedCTn = 1 / CTn;
      const DividedCAn = 1 / CAn;
      const DividedIDn = 1 / IDn;
      const DividedGPEn = 1 / GPEn;
      const DBn = barriersScore / barriersNumber;

      const DPcn = 2 / (DividedCTn + DividedCAn);
      const DPcen = 2 / (DividedIDn + DividedGPEn);
      const DPCSliceOne = 1 / DPcn;
      const DPCSliceTwo = 1 / DPcen;

      const DPCSlice = DPCSliceOne + DPCSliceTwo;
      const DPCSliceResult = 2 / DPCSlice;
      columnAndFoundationDPC = DPCSliceResult - DBn;
      if (columnAndFoundationDPC) {
        setDPC({
          ...dpc,
          columnAndFoundationDPC: columnAndFoundationDPC,
        });
      }
    }

    if (buildingCoreData["columnAndSlab"]) {
      // EQ One
      const CTn =
        buildingCoreData["columnAndSlab"]?.["connectionType"]?.["score"] || 0;
      const CAn =
        buildingCoreData["columnAndSlab"]?.["connectionAccessibility"]?.[
          "score"
        ] || 0;
      // EQ Two
      const IDn =
        buildingCoreData["columnAndSlab"]?.["independency"]?.["score"] || 0;
      const GPEn = buildingCoreData["columnAndSlab"]?.["gpe"]?.["score"] || 0;
      // EQ Three
      const barriersScore =
        buildingCoreData["columnAndSlab"]?.["barriers"]?.["score"] || 0;
      const barriersNumber =
        buildingCoreData["columnAndSlab"]?.["barriersNumber"] || 0;

      // Total calculation
      const DividedCTn = 1 / CTn;
      const DividedCAn = 1 / CAn;
      const DividedIDn = 1 / IDn;
      const DividedGPEn = 1 / GPEn;
      const DBn = barriersScore / barriersNumber;

      const DPcn = 2 / (DividedCTn + DividedCAn);
      const DPcen = 2 / (DividedIDn + DividedGPEn);
      const DPCSliceOne = 1 / DPcn;
      const DPCSliceTwo = 1 / DPcen;
      const DPCSlice = DPCSliceOne + DPCSliceTwo;
      const DPCSliceResult = 2 / DPCSlice;
      columnAndSlabDPC = DPCSliceResult - DBn;
      if (columnAndSlabDPC) {
        setDPC({
          ...dpc,
          columnAndSlabDPC: columnAndSlabDPC,
        });
      }
    }

    if (buildingCoreData["slabAndBearingWall"]) {
      // EQ One
      const CTn =
        buildingCoreData["slabAndBearingWall"]?.["connectionType"]?.["score"] ||
        0;
      const CAn =
        buildingCoreData["slabAndBearingWall"]?.["connectionAccessibility"]?.[
          "score"
        ] || 0;
      // EQ Two
      const IDn =
        buildingCoreData["slabAndBearingWall"]?.["independency"]?.["score"] ||
        0;
      const GPEn =
        buildingCoreData["slabAndBearingWall"]?.["gpe"]?.["score"] || 0;
      // EQ Three
      const barriersScore =
        buildingCoreData["slabAndBearingWall"]?.["barriers"]?.["score"] || 0;
      const barriersNumber =
        buildingCoreData["slabAndBearingWall"]?.["barriersNumber"] || 0;

      // Total calculation
      const DividedCTn = 1 / CTn;
      const DividedCAn = 1 / CAn;
      const DividedIDn = 1 / IDn;
      const DividedGPEn = 1 / GPEn;
      const DBn = barriersScore / barriersNumber;

      const DPcn = 2 / (DividedCTn + DividedCAn);
      const DPcen = 2 / (DividedIDn + DividedGPEn);
      const DPCSliceOne = 1 / DPcn;
      const DPCSliceTwo = 1 / DPcen;
      const DPCSlice = DPCSliceOne + DPCSliceTwo;
      const DPCSliceResult = 2 / DPCSlice;
      slabAndBearingWallDPC = DPCSliceResult - DBn;
      if (slabAndBearingWallDPC) {
        setDPC({
          ...dpc,
          slabAndBearingWallDPC: slabAndBearingWallDPC,
        });
      }
    }

    const connectionNumberOne =
      buildingCoreData["columnAndBeam"]?.["connectionNumber"] || 0;
    const connectionNumberTwo =
      buildingCoreData["columnAndBearingWall"]?.["connectionNumber"] || 0;
    const connectionNumberThree =
      buildingCoreData["columnAndFoundation"]?.["connectionNumber"] || 0;
    const connectionNumberFour =
      buildingCoreData["columnAndSlab"]?.["connectionNumber"] || 0;
    const connectionNumberFive =
      buildingCoreData["slabAndBearingWall"]?.["connectionNumber"] || 0;

    connectionNumbers =
      connectionNumberOne +
      connectionNumberTwo +
      connectionNumberThree +
      connectionNumberFour +
      connectionNumberFive;

    // const totalCoreConnections =
    const totalDPCOfBuildingCore =
      dpc?.columnAndBeamDPC +
      dpc?.columnAndBearingWallDPC +
      dpc?.columnAndFoundationDPC +
      dpc?.columnAndSlabDPC +
      dpc?.slabAndBearingWallDPC;

    setTotalValue({
      ...totalValue,
      totalCoreConnections: connectionNumbers || 0,
      totalDPCOfBuildingCore: totalDPCOfBuildingCore || 0,
    });
  }, [buildingCoreData]);

  console.log(columnAndBeamDPC);

  return (
    <div className="w-full px-10">
      <div className="flex flex-col">
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
            <Button btnTitle="Column & Beam" className="!bg-[#F4B081] !px-3" />
            <Button
              btnTitle="Column & Bearing wall"
              className="!bg-[#F4B081] !px-3"
            />
            <Button
              btnTitle="Column & Foundation"
              className="!bg-[#F4B081] !px-3"
            />
            <Button btnTitle="Beam & Slab" className="!bg-[#F4B081] !px-2" />
            <Button
              btnTitle="Slab & Bearing wall"
              className="!bg-[#F4B081] !px-3"
            />
          </div>

          {/* Connection Type  */}
          <div className="flex-1">
            {/* <h3 className="text-center mb-3">Connection type</h3> */}
            <div className="flex flex-col gap-4">
              <SelectDropdown
                contents={connectionType}
                handleSetData={handleSetData}
                attributesValue={{
                  connectionName: "columnAndBeam",
                  attributeKey: "connectionType",
                }}
              />
              <SelectDropdown
                contents={connectionType}
                handleSetData={handleSetData}
                attributesValue={{
                  connectionName: "columnAndBearingWall",
                  attributeKey: "connectionType",
                }}
              />

              <SelectDropdown
                contents={connectionType}
                handleSetData={handleSetData}
                attributesValue={{
                  connectionName: "columnAndFoundation",
                  attributeKey: "connectionType",
                }}
              />
              <SelectDropdown
                contents={connectionType}
                handleSetData={handleSetData}
                attributesValue={{
                  connectionName: "columnAndSlab",
                  attributeKey: "connectionType",
                }}
              />
              <SelectDropdown
                contents={connectionType}
                handleSetData={handleSetData}
                attributesValue={{
                  connectionName: "slabAndBearingWall",
                  attributeKey: "connectionType",
                }}
              />
            </div>
          </div>

          {/* Connection Accessibility */}
          <div className="flex-1">
            <div className="flex flex-col gap-4">
              <SelectDropdown
                contents={connectionAccessibility}
                handleSetData={handleSetData}
                attributesValue={{
                  connectionName: "columnAndBeam",
                  attributeKey: "connectionAccessibility",
                }}
              />
              <SelectDropdown
                contents={connectionAccessibility}
                handleSetData={handleSetData}
                attributesValue={{
                  connectionName: "columnAndBearingWall",
                  attributeKey: "connectionAccessibility",
                }}
              />
              <SelectDropdown
                contents={connectionAccessibility}
                handleSetData={handleSetData}
                attributesValue={{
                  connectionName: "columnAndFoundation",
                  attributeKey: "connectionAccessibility",
                }}
              />
              <SelectDropdown
                contents={connectionAccessibility}
                handleSetData={handleSetData}
                attributesValue={{
                  connectionName: "columnAndSlab",
                  attributeKey: "connectionAccessibility",
                }}
              />
              <SelectDropdown
                contents={connectionAccessibility}
                handleSetData={handleSetData}
                attributesValue={{
                  connectionName: "slabAndBearingWall",
                  attributeKey: "connectionAccessibility",
                }}
              />
            </div>
          </div>

          {/* Independency */}
          <div className="flex-1">
            <div className="flex flex-col gap-4">
              <SelectDropdown
                contents={independency}
                handleSetData={handleSetData}
                attributesValue={{
                  connectionName: "columnAndBeam",
                  attributeKey: "independency",
                }}
              />
              <SelectDropdown
                contents={independency}
                handleSetData={handleSetData}
                attributesValue={{
                  connectionName: "columnAndBearingWall",
                  attributeKey: "independency",
                }}
              />
              <SelectDropdown
                contents={independency}
                handleSetData={handleSetData}
                attributesValue={{
                  connectionName: "columnAndFoundation",
                  attributeKey: "independency",
                }}
              />
              <SelectDropdown
                contents={independency}
                handleSetData={handleSetData}
                attributesValue={{
                  connectionName: "columnAndSlab",
                  attributeKey: "independency",
                }}
              />
              <SelectDropdown
                contents={independency}
                handleSetData={handleSetData}
                attributesValue={{
                  connectionName: "slabAndBearingWall",
                  attributeKey: "independency",
                }}
              />
            </div>
          </div>

          {/* Geometry of product edge of Element */}
          <div className="flex-1">
            <div className="flex flex-col gap-4">
              <SelectDropdown
                contents={GeometryOfProductEdge}
                handleSetData={handleSetData}
                attributesValue={{
                  connectionName: "columnAndBeam",
                  attributeKey: "gpe",
                }}
              />
              <SelectDropdown
                contents={GeometryOfProductEdge}
                handleSetData={handleSetData}
                attributesValue={{
                  connectionName: "columnAndBearingWall",
                  attributeKey: "gpe",
                }}
              />
              <SelectDropdown
                contents={GeometryOfProductEdge}
                handleSetData={handleSetData}
                attributesValue={{
                  connectionName: "columnAndFoundation",
                  attributeKey: "gpe",
                }}
              />
              <SelectDropdown
                contents={GeometryOfProductEdge}
                handleSetData={handleSetData}
                attributesValue={{
                  connectionName: "columnAndSlab",
                  attributeKey: "gpe",
                }}
              />
              <SelectDropdown
                contents={GeometryOfProductEdge}
                handleSetData={handleSetData}
                attributesValue={{
                  connectionName: "slabAndBearingWall",
                  attributeKey: "gpe",
                }}
              />
            </div>
          </div>

          {/* Connection number */}
          <div className="w-[100px]">
            <div className="flex flex-col gap-4">
              <Input
                handleSetData={handleSetData}
                attributesValue={{
                  connectionName: "columnAndBeam",
                  attributeKey: "connectionNumber",
                }}
              />
              <Input
                handleSetData={handleSetData}
                attributesValue={{
                  connectionName: "columnAndBearingWall",
                  attributeKey: "connectionNumber",
                }}
              />
              <Input
                handleSetData={handleSetData}
                attributesValue={{
                  connectionName: "columnAndFoundation",
                  attributeKey: "connectionNumber",
                }}
              />
              <Input
                handleSetData={handleSetData}
                attributesValue={{
                  connectionName: "columnAndSlab",
                  attributeKey: "connectionNumber",
                }}
              />
              <Input
                handleSetData={handleSetData}
                attributesValue={{
                  connectionName: "slabAndBearingWall",
                  attributeKey: "connectionNumber",
                }}
              />
            </div>
          </div>

          {/* Barriers */}
          <div className="flex-1">
            <div className="flex flex-col gap-4">
              <SelectDropdown
                contents={barriers}
                handleSetData={handleSetData}
                attributesValue={{
                  connectionName: "columnAndBeam",
                  attributeKey: "barriers",
                }}
              />
              <SelectDropdown
                contents={barriers}
                handleSetData={handleSetData}
                attributesValue={{
                  connectionName: "columnAndBearingWall",
                  attributeKey: "barriers",
                }}
              />
              <SelectDropdown
                contents={barriers}
                handleSetData={handleSetData}
                attributesValue={{
                  connectionName: "columnAndFoundation",
                  attributeKey: "barriers",
                }}
              />
              <SelectDropdown
                contents={barriers}
                handleSetData={handleSetData}
                attributesValue={{
                  connectionName: "columnAndSlab",
                  attributeKey: "barriers",
                }}
              />
              <SelectDropdown
                contents={barriers}
                handleSetData={handleSetData}
                attributesValue={{
                  connectionName: "slabAndBearingWall",
                  attributeKey: "barriers",
                }}
              />
            </div>
          </div>

          {/* Barriers number */}
          <div className="w-[100px]">
            <div className="flex flex-col gap-4">
              <Input
                handleSetData={handleSetData}
                attributesValue={{
                  connectionName: "columnAndBeam",
                  attributeKey: "barriersNumber",
                }}
              />
              <Input
                handleSetData={handleSetData}
                attributesValue={{
                  connectionName: "columnAndBearingWall",
                  attributeKey: "barriersNumber",
                }}
              />
              <Input
                handleSetData={handleSetData}
                attributesValue={{
                  connectionName: "columnAndFoundation",
                  attributeKey: "barriersNumber",
                }}
              />
              <Input
                handleSetData={handleSetData}
                attributesValue={{
                  connectionName: "columnAndSlab",
                  attributeKey: "barriersNumber",
                }}
              />
              <Input
                handleSetData={handleSetData}
                attributesValue={{
                  connectionName: "slabAndBearingWall",
                  attributeKey: "barriersNumber",
                }}
              />
            </div>
          </div>

          {/* Disassembly Potential of the Connection DPC */}
          <div className="flex-1 flex flex-col gap-5 justify-between">
            <div className="min-h-[45px] font-semibold py-[7px] border-2 border-black bg-[#E1EFD8] !px-3 ">
              <span>{dpc?.columnAndBeamDPC || ""}</span>
            </div>

            <div className="min-h-[45px] font-semibold py-[7px] border-2 border-black bg-[#E1EFD8] !px-3 ">
              <span>{dpc?.columnAndBearingWallDPC || ""}</span>
            </div>

            <div className="min-h-[45px] font-semibold py-[7px] border-2 border-black bg-[#E1EFD8] !px-3 ">
              <span>{dpc?.columnAndFoundationDPC || ""}</span>
            </div>

            <div className="min-h-[45px] font-semibold py-[7px] border-2 border-black bg-[#E1EFD8] !px-3 ">
              <span>{dpc?.columnAndSlabDPC || ""}</span>
            </div>

            <div className="min-h-[45px] font-semibold py-[7px] border-2 border-black bg-[#E1EFD8] !px-3 ">
              <span>{dpc?.slabAndBearingWallDPC || ""}</span>
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
                y: parseFloat(columnAndBeamDPC)?.toFixed(2) || 0,
              },
              {
                x: "Column and slab",
                y: parseFloat(columnAndBearingWallDPC)?.toFixed(2) || 0,
              },
              {
                x: "Column and bearing wall",
                y: parseFloat(columnAndFoundationDPC)?.toFixed(2) || 0,
              },
              {
                x: "Beam and slab",
                y: parseFloat(columnAndSlabDPC)?.toFixed(2) || 0,
              },
              {
                x: "Beam and bearing wall",
                y: parseFloat(slabAndBearingWallDPC)?.toFixed(2) || 0,
              },
              {
                x: "Slab and bearing wall",
                y: parseFloat(columnAndBearingWallDPC)?.toFixed(2) || 0,
              },
            ]}
          />
          <Charts
            color="#F4B081"
            title="Disassembly potential of the core connections DPC based on the DfD criteria and barriers"
            data={[
              {
                x: "Connection type",
                y: 1292,
              },
              {
                x: "Connection accessibility",
                y: 4432,
              },
              {
                x: "Independency",
                y: 5423,
              },
              {
                x: "Geometry of product edge",
                y: 6653,
              },
              {
                x: "Barriers",
                y: 8133,
              },
            ]}
          />
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-4">
              <ProgressBar progress={60} />
              <Button
                btnTitle={`Total core connections: ${totalValue?.totalCoreConnections}`}
                className="!text-left text-base !px-2 !bg-[#D5DBE5]"
              />
              <Button
                btnTitle={`Total DPC of the building’s core: ${parseFloat(
                  totalDPCOfBuildingCore
                )?.toFixed(2)}`}
                className="!text-left text-base !px-2"
              />
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
