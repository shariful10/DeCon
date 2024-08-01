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

// Calculate DPC based on building core data
export const calculateDPC = (data, type) => {
  if (!data) return 0;

  const CTn = data?.connectionType?.score || 0;
  const CAn = data?.connectionAccessibility?.score || 0;
  const IDn = data?.independency?.score || 0;
  const GPEn = data?.gpe?.score || 0;
  const connectionNumber = data?.connectionNumber?.score || 0;
  const barriersScore = data?.barriers?.score || 0;
  const barriersNumber = data?.barriersNumber?.score || 0;
  const barriersScoreAndNumbers = barriersScore * barriersNumber;

  const DPcnTotalValue = 1 / CTn + 1 / CAn;
  const DPcenTotalValue = 1 / IDn + 1 / GPEn;
  const DPcn = 2 / DPcnTotalValue;
  const DPcen = 2 / DPcenTotalValue;
  const DPCSlice = 1 / DPcn + 1 / DPcen;
  let totalDPC = (2 / DPCSlice) * connectionNumber;

  return ((totalDPC - barriersScoreAndNumbers) / connectionNumber) * 100;
};

export const connectionType = [
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

export const connectionAccessibilityOptions = [
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
      {
        label:
          "Not accessible - irreparable damage to the product or surrounding products",
        value:
          "not_accessible_irreparable_damage_to_the_product_or_surrounding_products",
        score: 0.1,
      },
    ],
  },
];

export const independency = [
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
        label: "Full integration of products or elements from different layers",
        value: "full_integration_of_products_or_elements_from_different_layers",
        score: 0.1,
      },
    ],
  },
];

export const GeometryOfProductEdge = [
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

export const barriers = [
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
