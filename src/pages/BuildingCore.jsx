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

// images
import click_connectionImg from "../assets/Connection-photos/Dry connection/Dry connection - Click connection.jpeg";
import looseImg from "../assets/Connection-photos/Dry connection/Dry connection - Loose (no fastening material).png";
import magnetic_connectionImg from "../assets/Connection-photos/Dry connection/Dry connection - Magnetic connection.png";
import velcro_connectionImg from "../assets/Connection-photos/Dry connection/Dry connection - Velcro connection.jpg";

import bolt_and_nut_connection_Img from "../assets/Connection-photos/Connection with added elements/Connection with added elements - Bolt and nut connection.jpg";
import corner_connections_Img from "../assets/Connection-photos/Connection with added elements/Connection with added elements - Corner connection.jpg";
import screw_connection_Img from "../assets/Connection-photos/Connection with added elements/Connection with added elements - Screw connection (1).jpg";
import spring_connection_Img from "../assets/Connection-photos/Connection with added elements/Connection with added elements - Spring connection.jpg";

import nail_connection_img from "../assets/Connection-photos/Direct integral connection/Direct integral connection - Nail connection.jpg";
import pin_connection_img from "../assets/Connection-photos/Direct integral connection/Direct integral connection - Pin connection.png";

import caulking_connection_img from "../assets/Connection-photos/Soft chemical connection/Soft chemical connection - Soft chemical connection 2.jpg";

import adhesive_connection_img from "../assets/Connection-photos/Hard chemical connection/Hard chemical connectio (1).jpg";

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

  const connectionType = [
    {
      label: "Dry Connection",
      value: "dry_connection",
      options: [
        {
          label: "Loose (no fastening material)",
          value: "loose",
          score: 1.0,
          image: looseImg,
        },
        {
          label: "Click connection",
          value: "click_connection",
          score: 1.0,
          image: click_connectionImg,
        },
        {
          label: "Velcro connection",
          value: "velcro_connection",
          score: 1.0,
          image: velcro_connectionImg,
        },
        {
          label: "Magnetic connection",
          value: "magnetic_connection",
          score: 0,
          image: magnetic_connectionImg,
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
          image: bolt_and_nut_connection_Img,
        },
        {
          label: "Spring connection",
          value: "spring_connection",
          score: 0.8,
          image: spring_connection_Img,
        },
        {
          label: "Corner connections",
          value: "corner_connections",
          score: 0.8,
          image: corner_connections_Img,
        },
        {
          label: "Screw connection",
          value: "screw_connection",
          score: 0.8,
          image: screw_connection_Img,
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
          image: pin_connection_img,
        },
        {
          label: "Nail connection",
          value: "nail_connection",
          score: 0.6,
          image: nail_connection_img,
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
          image: caulking_connection_img,
        },
        {
          label: "Foam connection (PUR)",
          value: "foam_connection_pur",
          score: 0.2,
          //  image: foam_connection_pur_img,
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
          image: adhesive_connection_img,
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
          label: "Cementites connection",
          value: "cementites_connection",
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

  const connectionAccessibilityOptions = [
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
    {
      label: "No Barriers",
      value: "no_barriers",
      score: 0,
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

  const calculateTotalScores = (data, attributeKey) => {
    return Object.values(data)?.reduce((acc, item) => {
      const accNumber = acc || 0;
      const itemNumber = item?.[attributeKey]?.score || 0;
      const totalScores = accNumber + itemNumber;
      return totalScores;
    }, 0);
  };

  // Calculate DPC based on building core data
  const calculateDPC = (data, type) => {
    if (!data) return 0;

    const CTn = data?.connectionType?.score || 0;
    const CAn = data?.connectionAccessibility?.score || 0;
    const IDn = data?.independency?.score || 0;
    const GPEn = data?.gpe?.score || 0;
    const barriersScore = data?.barriers?.score || 0;
    const barriersNumber = data?.barriersNumber?.score || 0;
    const DBn = barriersScore * barriersNumber;

    const DPcnTotalValue = 1 / CTn + 1 / CAn;
    const DPcenTotalValue = 1 / IDn + 1 / GPEn;
    const DPcn = 2 / DPcnTotalValue;
    const DPcen = 2 / DPcenTotalValue;
    const DPCSlice = 1 / DPcn + 1 / DPcen;

    return 2 / DPCSlice - DBn;
  };

  const totalColumnAndBeamDPC =
    isNaN(columnAndBeamDPC) ||
    columnAndBeamDPC == null ||
    columnAndBeamDPC === ""
      ? (buildingCore[columnAndBeamDPC] * 100).toFixed(0) || ""
      : (parseFloat(columnAndBeamDPC) * 100).toFixed(2) || "";

  const totalColumnAndSlabDPC =
    isNaN(columnAndSlabDPC) ||
    columnAndSlabDPC == null ||
    columnAndSlabDPC === ""
      ? (buildingCore[columnAndSlabDPC] * 100).toFixed(0) || ""
      : (parseFloat(columnAndSlabDPC) * 100).toFixed(2) || "";

  const totalColumnAndBearingWallDPC =
    isNaN(columnAndBearingWallDPC) ||
    columnAndBearingWallDPC == null ||
    columnAndBearingWallDPC === ""
      ? (buildingCore[columnAndBearingWallDPC] * 100).toFixed(0) || ""
      : (parseFloat(columnAndBearingWallDPC) * 100).toFixed(2) || "";

  const totalColumnAndFoundationDPC =
    isNaN(columnAndFoundationDPC) ||
    columnAndFoundationDPC == null ||
    columnAndFoundationDPC === ""
      ? (buildingCore[columnAndFoundationDPC] * 100).toFixed(0) || ""
      : (parseFloat(columnAndFoundationDPC) * 100).toFixed(2) || "";

  const totalBeamAndSlabDPC =
    isNaN(beamAndSlabDPC) || beamAndSlabDPC == null || beamAndSlabDPC === ""
      ? (buildingCore[beamAndSlabDPC] * 100).toFixed(0) || ""
      : (parseFloat(beamAndSlabDPC) * 100).toFixed(2) || "";

  const totalSlabAndBearingWallDPC =
    isNaN(slabAndBearingWallDPC) ||
    slabAndBearingWallDPC == null ||
    slabAndBearingWallDPC === ""
      ? (buildingCore[slabAndBearingWallDPC] * 100).toFixed(0) || ""
      : (parseFloat(slabAndBearingWallDPC) * 100).toFixed(2) || "";

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

    // setting total scores
    setTotalValue({
      ...totalValue,
      totalConnectionTypesScore:
        Math.round(totalConnectionTypeScore * 100) / 100,
      totalColumnAndSlabScore: Math.round(totalColumnAndSlabScore * 100) / 100,
      connectionAccessibilityScore:
        Math.round(totalConnectionAccessibilityScore * 100) / 100,
      totalGpeScore: Math.round(totalGpeScore * 100) / 100,
      totalIndependencyScore: Math.round(totalIndependencyScore * 100) / 100,
      totalConnectionNumberScore: connectionNumbers || 0,
      totalBarriersScore: Math.round(totalBarriersScore * 100) / 100,
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
          <div className="flex-1 flex flex-col gap-5 justify-between">
            <div className="min-h-[45px] font-semibold py-[7px] border-2 border-black bg-[#E1EFD8] !px-3 ">
              <span>
                {isNaN(totalColumnAndBeamDPC)
                  ? ""
                  : Number(totalColumnAndBeamDPC)?.toFixed(0)}
              </span>
            </div>

            <div className="min-h-[45px] font-semibold py-[7px] border-2 border-black bg-[#E1EFD8] !px-3 ">
              <span>
                {isNaN(totalColumnAndSlabDPC)
                  ? ""
                  : Number(totalColumnAndSlabDPC)?.toFixed(0)}
              </span>
            </div>

            <div className="min-h-[45px] font-semibold py-[7px] border-2 border-black bg-[#E1EFD8] !px-3 ">
              <span>
                {isNaN(totalColumnAndBearingWallDPC)
                  ? ""
                  : Number(totalColumnAndBearingWallDPC)?.toFixed(0)}
              </span>
            </div>

            <div className="min-h-[45px] font-semibold py-[7px] border-2 border-black bg-[#E1EFD8] !px-3">
              <span>
                {isNaN(totalColumnAndFoundationDPC)
                  ? ""
                  : Number(totalColumnAndFoundationDPC)?.toFixed(0)}
              </span>
            </div>

            <div className="min-h-[45px] font-semibold py-[7px] border-2 border-black bg-[#E1EFD8] !px-3 ">
              <span>
                {isNaN(totalBeamAndSlabDPC)
                  ? ""
                  : Number(totalBeamAndSlabDPC)?.toFixed(0)}
              </span>
            </div>

            <div className="min-h-[45px] font-semibold py-[7px] border-2 border-black bg-[#E1EFD8] !px-3 ">
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
                y: parseFloat(totalConnectionTypesScore)?.toFixed(2) || 0,
              },
              {
                x: "Connection accessibility",
                y: parseFloat(connectionAccessibilityScore)?.toFixed(2) || 0,
              },
              {
                x: "Independency",
                y: parseFloat(totalIndependencyScore)?.toFixed(2) || 0,
              },
              {
                x: "Geometry of product edge",
                y: parseFloat(totalGpeScore)?.toFixed(2) || 0,
              },
              {
                x: "Barriers",
                y: parseFloat(totalBarriersScore)?.toFixed(2) || 0,
              },
            ]}
            max={100}
          />
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-4">
              <ProgressBar
                progress={
                  parseFloat((totalDPCOfBuildingCore / 6) * 100)?.toFixed(2) ||
                  0
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
