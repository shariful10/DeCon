import Container from "../components/container/Container";
import UploadIcon from "../components/icons/UploadIcon";
import Navbar from "../components/shared/Navbar";

const BuildingInfo = () => {
	return (
		<>
			<Navbar />
			<Container>
				<div className="w-full md:w-[70%] mx-auto">
					<h1 className="text-2xl font-semibold">Building information:</h1>
					<div className="mt-14">
						<form>
							<div className="grid md:grid-cols-3 gap-10">
								<div className="col-span-2">
									<div className="flex justify-between items-end mb-2">
										<label htmlFor="building-type" className="text-lg">
											Building type:
										</label>
										<input
											type="text"
											className="w-[500px] bg-gray-200 py-1.5 pl-3 focus:outline-none"
											name="building-type"
											id="building-type"
										/>
									</div>
									<div className="flex justify-between items-end">
										<label htmlFor="country" className="text-lg">
											Country:
										</label>
										<div className="w-[500px]">
											<div className="flex justify-between items-end mb-2">
												<input
													type="text"
													className=" bg-gray-200 py-1.5 pl-3 focus:outline-none"
													name="building-type"
													id="building-type"
												/>
												<label htmlFor="post-code" className="text-lg">
													Post code:
												</label>
												<input
													type="text"
													className=" bg-gray-200 py-1.5 pl-3 focus:outline-none"
													name="building-type"
													id="building-type"
												/>
											</div>
											<div className="flex justify-between items-end">
												<label htmlFor="post-code" className="text-lg">
													City:
												</label>
												<input
													type="text"
													className=" bg-gray-200 py-1.5 pl-3 focus:outline-none"
													name="building-type"
													id="building-type"
												/>
												<label
													htmlFor="post-code"
													className="text-lg whitespace-nowrap"
												>
													Street:
												</label>
												<input
													type="text"
													className=" bg-gray-200 py-1.5 pl-3 focus:outline-none"
													name="building-type"
													id="building-type"
												/>
											</div>
										</div>
									</div>
								</div>
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
						</form>
					</div>
				</div>
			</Container>
		</>
	);
};

export default BuildingInfo;
