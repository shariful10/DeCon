import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/utils/Button";
import Navbar from "../components/shared/Navbar";
import UploadIcon from "../components/icons/UploadIcon";
import Container from "../components/container/Container";
import { addBuildingInfo } from "../redux/features/buildingInfoSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const BuildingInfo = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { buildingInfo } = useSelector((state) => state.buildingInfo);
	console.log(
		"🚀 ~ file: BuildingInfo.jsx:16 ~ BuildingInfo ~ buildingInfo:",
		buildingInfo
	);

	const [building, setBuilding] = useState({
		buildingType: "",
		country: "",
		postCode: "",
		city: "",
		street: "",
		no: 0,
		area: "",
		constructionDate: "",
		calculationDate: "",
		softwareVersion: "",
		image: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addBuildingInfo(building));
		navigate("/constructions-type");
	};

	return (
		<>
			<Navbar />
			<Container>
				<div className="w-full md:w-[70%] mx-auto my-[50px]">
					<h1 className="text-2xl font-semibold">Building information:</h1>
					<div className="mt-14">
						<form onSubmit={handleSubmit}>
							<div className="grid xl:grid-cols-3 gap-10">
								<div className="xl:col-span-2">
									<div className="">
										<div className="grid grid-cols-3 items-end mb-4">
											<div className="flex flex-col">
												<label
													htmlFor="buildingType"
													className="whitespace-nowrap"
												>
													Building type:
												</label>
											</div>
											<div className="col-span-2">
												<input
													onChange={(e) =>
														setBuilding({
															...building,
															buildingType: e.target.value,
														})
													}
													type="text"
													className="bg-gray-200 py-1.5 pl-3 focus:outline-none w-full"
													name="buildingType"
													id="buildingType"
													required
												/>
											</div>
										</div>
										<div className="grid grid-cols-3 items-end mb-4">
											<div className="flex flex-col">
												<label htmlFor="country" className="whitespace-nowrap">
													Country:
												</label>
											</div>
											<div className="col-span-2">
												<div className="flex justify-between items-end gap-4">
													<input
														onChange={(e) =>
															setBuilding({
																...building,
																country: e.target.value,
															})
														}
														type="text"
														className="bg-gray-200 py-1.5 pl-3 focus:outline-none w-[35%]"
														name="country"
														id="country"
														required
													/>
													<div className="flex items-end justify-between gap-4">
														<label
															htmlFor="postCode"
															className="whitespace-nowrap"
														>
															Post code:
														</label>
														<input
															onChange={(e) =>
																setBuilding({
																	...building,
																	postCode: e.target.value,
																})
															}
															type="text"
															className="bg-gray-200 py-1.5 pl-3 focus:outline-none w-full"
															name="postCode"
															id="postCode"
															required
														/>
													</div>
												</div>
											</div>
										</div>
										<div className="grid grid-cols-3 items-end mb-4">
											<div className="flex flex-col">
												<label htmlFor="city" className="whitespace-nowrap">
													City:
												</label>
											</div>
											<div className="col-span-2">
												<div className="flex justify-between items-end gap-4">
													<input
														onChange={(e) =>
															setBuilding({
																...building,
																city: e.target.value,
															})
														}
														type="text"
														className="bg-gray-200 py-1.5 pl-3 focus:outline-none w-[55%]"
														name="city"
														id="city"
														required
													/>
													<div className="flex items-end justify-between gap-4">
														<div className="flex justify-between items-center gap-4">
															<div className="flex justify-between items-end gap-4 w-[65%]">
																<label
																	htmlFor="street"
																	className="whitespace-nowrap"
																>
																	Street:
																</label>
																<input
																	onChange={(e) =>
																		setBuilding({
																			...building,
																			street: e.target.value,
																		})
																	}
																	type="text"
																	className="bg-gray-200 py-1.5 pl-3 focus:outline-none w-full"
																	name="street"
																	id="street"
																	required
																/>
															</div>
															<div className="flex justify-between items-end gap-4 w-[31%]">
																<label
																	htmlFor="no"
																	className="whitespace-nowrap"
																>
																	No:
																</label>
																<input
																	onChange={(e) =>
																		setBuilding({
																			...building,
																			no: e.target.value,
																		})
																	}
																	type="number"
																	className="bg-gray-200 py-1.5 pl-3 focus:outline-none w-full"
																	name="no"
																	id="no"
																	required
																/>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="grid grid-cols-3 items-end mb-4">
											<div className="flex flex-col">
												<label htmlFor="area" className="whitespace-nowrap">
													Area:
												</label>
											</div>
											<div className="col-span-2">
												<div className="flex justify-between items-end gap-4">
													<input
														onChange={(e) =>
															setBuilding({
																...building,
																area: e.target.value,
															})
														}
														type="text"
														className="bg-gray-200 py-1.5 pl-3 focus:outline-none w-[35%]"
														name="area"
														id="area"
														required
													/>
												</div>
											</div>
										</div>
										<div className="grid grid-cols-3 items-end mb-4">
											<div className="flex flex-col">
												<label
													htmlFor="constructionDate"
													className="whitespace-nowrap"
												>
													Construction date:
												</label>
											</div>
											<div className="col-span-2">
												<div className="flex justify-between items-end gap-4">
													<input
														onChange={(e) =>
															setBuilding({
																...building,
																constructionDate: e.target.value,
															})
														}
														type="date"
														className="bg-gray-200 py-1.5 px-3 focus:outline-none w-[35%]"
														name="constructionDate"
														id="constructionDate"
														required
													/>
												</div>
											</div>
										</div>
										<div className="grid grid-cols-3 items-end mb-4">
											<div className="flex flex-col">
												<label
													htmlFor="calculationDate"
													className="whitespace-nowrap"
												>
													Calculation date:
												</label>
											</div>
											<div className="col-span-2">
												<div className="flex justify-between items-end gap-4">
													<input
														onChange={(e) =>
															setBuilding({
																...building,
																calculationDate: e.target.value,
															})
														}
														type="date"
														className="bg-gray-200 py-1.5 px-3 focus:outline-none w-[35%]"
														name="calculationDate"
														id="calculationDate"
														required
													/>
												</div>
											</div>
										</div>
										<div className="grid grid-cols-3 items-end mb-4">
											<div className="flex flex-col">
												<label
													htmlFor="softwareVersion"
													className="whitespace-nowrap"
												>
													Software version:
												</label>
											</div>
											<div className="col-span-2">
												<div className="flex justify-between items-end gap-4">
													<input
														onChange={(e) =>
															setBuilding({
																...building,
																softwareVersion: e.target.value,
															})
														}
														type="text"
														className="bg-gray-200 py-1.5 px-3 focus:outline-none w-[35%]"
														name="softwareVersion"
														id="softwareVersion"
														required
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* Image upload from here */}
								<div className="border-2 border-gray-300 relative p-10">
									<input
										onChange={(e) =>
											setBuilding({
												...building,
												image: e.target.value,
											})
										}
										type="file"
										name="image"
										id="image"
										className="opacity-0 absolute top-0 left-0 w-full h-full"
										accept="image/*"
										required
									/>
									<label
										htmlFor="image"
										className="flex flex-col items-center justify-center w-full h-full cursor-pointer"
									>
										<UploadIcon />
										<span className="text-gray-400">Upload building image</span>
									</label>
								</div>
							</div>
							<div className="text-right mt-[100px]">
								<Button type="submit" btnTitle="Next" />
							</div>
						</form>
					</div>
				</div>
			</Container>
		</>
	);
};

export default BuildingInfo;
