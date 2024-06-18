import { useRef } from "react";
import Button from "../utils/Button";
import PdfGenerate from "./PdfGenerate";
import { useReactToPrint } from "react-to-print";

const PdfReport = () => {
	const reportRef = useRef();

	const handlePrint = useReactToPrint({
		content: () => reportRef.current,
		documentTitle: "Report",
	});

	return (
		<div className="p-6 w-[834px] mx-auto">
			<div onClick={handlePrint} className="mb-5">
				<Button btnTitle="Download report" />
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
