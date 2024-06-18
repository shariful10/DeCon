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

	useEffect(() => {
		let columnAndShellElementDPC;
		let beamAndShellElementDPC;
		let slabAndShellElementDPC;
		let bearingWallAndShellElementDPC;

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

		// const totalCoreConnections =
		const totalDPCOfBuildingCore =
			dpc?.columnAndShellElementDPC +
			dpc?.beamAndShellElementDPC +
			dpc?.slabAndShellElementDPC +
			dpc?.bearingWallAndShellElementDPC;

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
			totalDPCOfBuildingCore: totalDPCOfBuildingCore || 0,
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
					<div className="flex-1 flex flex-col justify-between gap-4">
						<Button
							btnTitle="Column & Shell element"
							className="!bg-[#F4B081] !px-3"
						/>
						<Button
							btnTitle="Beam & Shell element"
							className="!bg-[#F4B081] !px-3"
						/>
						<Button
							btnTitle="Slab & Shell element"
							className="!bg-[#F4B081] !px-3"
						/>
						<Button
							btnTitle="Bearing wall & Shell element"
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
					</div>

					{/* Connection Accessibility */}
					<div className="flex-1">
						<div className="flex flex-col gap-4">
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
					</div>

					{/* Independency */}
					<div className="flex-1">
						<div className="flex flex-col gap-4">
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
					</div>

					{/* Geometry of product edge of Element */}
					<div className="flex-1">
						<div className="flex flex-col gap-4">
							<SelectDropdown
								contents={GeometryOfProductEdge}
								handleSetData={handleSetData}
								attributesValue={{
									connectionName: "columnAndShellElement",
									attributeKey: "gpe",
								}}
								defaultValue={
									buildingShellInfo["columnAndShellElement"]?.["gpe"]
								}
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
					</div>

					{/* Connection number */}
					<div className="w-[100px]">
						<div className="flex flex-col gap-4">
							<Input
								handleSetData={handleSetData}
								attributesValue={{
									connectionName: "columnAndShellElement",
									attributeKey: "connectionNumber",
								}}
								defaultValue={
									buildingShellInfo["columnAndShellElement"]?.[
										"connectionNumber"
									]
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
					</div>

					{/* Barriers */}
					<div className="flex-1">
						<div className="flex flex-col gap-4">
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
					</div>

					{/* Barriers number */}
					<div className="w-[100px]">
						<div className="flex flex-col gap-4">
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
					</div>

					{/* Disassembly Potential of the Connection DPC */}
					<div className="flex-1 flex flex-col gap-5 justify-between">
						<div className="min-h-[45px] font-semibold py-[7px] border-2 border-black bg-[#E1EFD8] !px-3 ">
							<span>
								{/* {parseFloat(columnAndShellElementDPC)?.toFixed(2) || ""} */}
								{!columnAndShellElementDPC
									? buildingShell[columnAndShellElementDPC] || ""
									: Number(columnAndShellElementDPC)?.toFixed(2) || ""}
							</span>
						</div>

						<div className="min-h-[45px] font-semibold py-[7px] border-2 border-black bg-[#E1EFD8] !px-3 ">
							<span>
								{parseFloat(beamAndShellElementDPC)?.toFixed(2) || ""}
							</span>
						</div>

						<div className="min-h-[45px] font-semibold py-[7px] border-2 border-black bg-[#E1EFD8] !px-3 ">
							<span>
								{parseFloat(slabAndShellElementDPC)?.toFixed(2) || ""}
							</span>
						</div>

						<div className="min-h-[45px] font-semibold py-[7px] border-2 border-black bg-[#E1EFD8] !px-3 ">
							<span>
								{parseFloat(bearingWallAndShellElementDPC)?.toFixed(2) || ""}
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
								y: parseFloat(columnAndShellElementDPC)?.toFixed(2) || 0,
							},
							{
								x: "Beam & Shell element",
								y: parseFloat(beamAndShellElementDPC)?.toFixed(2) || 0,
							},
							{
								x: "Slab & Shell element",
								y: parseFloat(slabAndShellElementDPC)?.toFixed(2) || 0,
							},
							{
								x: "Bearing wall & Shell element",
								y: parseFloat(bearingWallAndShellElementDPC)?.toFixed(2) || 0,
							},
						]}
					/>
					<Charts
						color="#F4B081"
						title="Disassembly potential of the shell connections DPC based on the DfD criteria and barriers"
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
					/>
					<div className="flex flex-col gap-7">
						<div className="flex flex-col gap-4">
							<ProgressBar progress={60} />
							<Button
								btnTitle={`Total shell connections: ${totalConnectionNumberScore}`}
								className="!text-left text-base !px-2 !bg-[#D5DBE5]"
							/>
							<Button
								btnTitle={`Total DPC of the building’s shell: ${parseFloat(
									totalDPCOfBuildingCore
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
