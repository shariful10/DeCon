import { useRef } from "react";
import Button from "../utils/Button";
import PdfGenerate from "./PdfGenerate";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import toast from "react-hot-toast";

const PdfReport = () => {
	const reportRef = useRef();
	const navigate = useNavigate();

	const handlePrint = useReactToPrint({
		content: () => reportRef.current,
		documentTitle: "Report",
		onAfterPrint: () => {
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
				<PdfGenerate
					ref={reportRef}
					coreBarriers="5"
					coreDPC="80"
					shellConnections="20"
					shellBarriers="10"
					shellDPC="85"
					totalConnections="30"
					totalBarriers="15"
					totalCoreAndShellDPC="84"
				/>
			</div>
		</div>
	);
};

export default PdfReport;
