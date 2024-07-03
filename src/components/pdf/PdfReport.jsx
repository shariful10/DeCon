import { useRef } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { resetIndicator } from "../../redux/features/ProgressIndicator";
import { resetBuildingCore } from "../../redux/features/buildingCoreSlice";
import { resetBuildingInfo } from "../../redux/features/buildingInfoSlice";
import { resetBuildingShell } from "../../redux/features/buildingShellSlice";
import { resetConstructionType } from "../../redux/features/constructionTypeSlice";
import Button from "../utils/Button";
import PdfGenerate from "./PdfGenerate";

const PdfReport = () => {
	const reportRef = useRef();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handlePrint = useReactToPrint({
		content: () => reportRef.current,
		documentTitle: "Report",
		onAfterPrint: () => {
			dispatch(resetConstructionType());
			dispatch(resetBuildingShell());
			dispatch(resetBuildingInfo());
			dispatch(resetBuildingCore());
			dispatch(resetIndicator());
			toast.success("Report downloaded successfully!");
			navigate("/");
		},
	});

	return (
		<div className="p-6 w-[834px] mx-auto">
			<div className="flex items-center gap-2 mb-5">
				<div onClick={() => navigate("/result-and-report")}>
					<Button btnTitle="Previous" />
				</div>
				<div onClick={handlePrint}>
					<Button btnTitle="Download report" />
				</div>
			</div>
			<div className="border-2 border-[#c4c4c4da] w-[834px]">
				<PdfGenerate ref={reportRef} />
			</div>
		</div>
	);
};

export default PdfReport;
