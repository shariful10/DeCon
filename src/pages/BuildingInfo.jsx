import Navbar from "../components/shared/Navbar";
import UploadIcon from "../components/icons/UploadIcon";
import Container from "../components/container/Container";
import Button from "../components/utils/Button";

const BuildingInfo = () => {
	return (
		<>
			<Navbar />
			<Container>
				<div className="w-full md:w-[70%] mx-auto my-[50px]">
					<h1 className="text-2xl font-semibold">Building information:</h1>
					<div className="mt-14">
						<form>
							<div className="grid xl:grid-cols-3 gap-10">
								<div className="xl:col-span-2">
									<div className="">
										<div className="grid grid-cols-3 items-end mb-4">
											<div className="flex flex-col">
												<label
													htmlFor="building-type"
													className="whitespace-nowrap"
												>
													Building type:
												</label>
											</div>
											<div className="col-span-2">
												<input
													type="text"
													className="bg-gray-200 py-1.5 pl-3 focus:outline-none w-full"
													name="building-type"
													id="building-type"
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
														type="text"
														className="bg-gray-200 py-1.5 pl-3 focus:outline-none w-[35%]"
														name="country"
														id="country"
													/>
													<div className="flex items-end justify-between gap-4">
														<label
															htmlFor="post-code"
															className="whitespace-nowrap"
														>
															Post code:
														</label>
														<input
															type="text"
															className="bg-gray-200 py-1.5 pl-3 focus:outline-none w-full"
															name="post-code"
															id="post-code"
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
														type="text"
														className="bg-gray-200 py-1.5 pl-3 focus:outline-none w-[55%]"
														name="city"
														id="city"
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
																	type="text"
																	className="bg-gray-200 py-1.5 pl-3 focus:outline-none w-full"
																	name="street"
																	id="street"
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
																	type="tell"
																	className="bg-gray-200 py-1.5 pl-3 focus:outline-none w-full"
																	name="no"
																	id="no"
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
														type="text"
														className="bg-gray-200 py-1.5 pl-3 focus:outline-none w-[35%]"
														name="area"
														id="area"
													/>
												</div>
											</div>
										</div>
										<div className="grid grid-cols-3 items-end mb-4">
											<div className="flex flex-col">
												<label
													htmlFor="construction-date"
													className="whitespace-nowrap"
												>
													Construction date:
												</label>
											</div>
											<div className="col-span-2">
												<div className="flex justify-between items-end gap-4">
													<input
														type="date"
														className="bg-gray-200 py-1.5 px-3 focus:outline-none w-[35%]"
														name="construction-date"
														id="construction-date"
													/>
												</div>
											</div>
										</div>
										<div className="grid grid-cols-3 items-end mb-4">
											<div className="flex flex-col">
												<label
													htmlFor="calculation-date"
													className="whitespace-nowrap"
												>
													Calculation date:
												</label>
											</div>
											<div className="col-span-2">
												<div className="flex justify-between items-end gap-4">
													<input
														type="date"
														className="bg-gray-200 py-1.5 px-3 focus:outline-none w-[35%]"
														name="calculation-date"
														id="calculation-date"
													/>
												</div>
											</div>
										</div>
										<div className="grid grid-cols-3 items-end mb-4">
											<div className="flex flex-col">
												<label
													htmlFor="software-version"
													className="whitespace-nowrap"
												>
													Software version:
												</label>
											</div>
											<div className="col-span-2">
												<div className="flex justify-between items-end gap-4">
													<input
														type="text"
														className="bg-gray-200 py-1.5 px-3 focus:outline-none w-[35%]"
														name="software-version"
														id="software-version"
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* Image upload from here */}
								<div className="border-2 border-gray-300 relative p-10">
									<input
										type="file"
										name="image"
										id="image"
										className="opacity-0 absolute top-0 left-0 w-full h-full"
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
