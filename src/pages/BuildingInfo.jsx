import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/utils/Button";
import Navbar from "../components/shared/Navbar";
import UploadIcon from "../components/icons/UploadIcon";
import Container from "../components/container/Container";
import { addBuildingInfo } from "../redux/features/buildingInfoSlice";
import { useEffect } from "react";

const BuildingInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { buildingInfo } = useSelector((state) => state.buildingInfo);
  console.log(
    "🚀 ~ file: BuildingInfo.jsx:16 ~ BuildingInfo ~ buildingInfo:",
    buildingInfo.country
  );
  const [imagePreview, setImagePreview] = useState(null);
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

  useEffect(() => {
    if (buildingInfo) {
      setBuilding(buildingInfo);
    }
  }, [buildingInfo]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBuilding({
      ...building,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = URL.createObjectURL(e.target.files[0]);
    if (file) {
      setBuilding({ ...building, image: file });
      setImagePreview(file);
    }
  };

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
                          onChange={handleInputChange}
                          type="text"
                          className="bg-gray-200 py-1.5 pl-3 focus:outline-none w-full"
                          name="buildingType"
                          id="buildingType"
                          value={
                            building.buildingType || buildingInfo.buildingType
                          }
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
                            onChange={handleInputChange}
                            type="text"
                            className="bg-gray-200 py-1.5 pl-3 focus:outline-none w-[35%]"
                            name="country"
                            id="country"
                            value={building.country || buildingInfo.country}
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
                              onChange={handleInputChange}
                              type="text"
                              className="bg-gray-200 py-1.5 pl-3 focus:outline-none w-full"
                              name="postCode"
                              id="postCode"
                              value={building.postCode || buildingInfo.postCode}
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
                            onChange={handleInputChange}
                            type="text"
                            className="bg-gray-200 py-1.5 pl-3 focus:outline-none w-[55%]"
                            name="city"
                            id="city"
                            value={building.city || buildingInfo.city}
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
                                  onChange={handleInputChange}
                                  type="text"
                                  className="bg-gray-200 py-1.5 pl-3 focus:outline-none w-full"
                                  name="street"
                                  id="street"
                                  value={building.street || buildingInfo.street}
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
                                  onChange={handleInputChange}
                                  type="number"
                                  className="bg-gray-200 py-1.5 pl-3 focus:outline-none w-full"
                                  name="no"
                                  id="no"
                                  value={building.no || buildingInfo.no}
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
                            onChange={handleInputChange}
                            type="text"
                            className="bg-gray-200 py-1.5 pl-3 focus:outline-none w-[35%]"
                            name="area"
                            id="area"
                            value={building.area || buildingInfo.area}
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
                            onChange={handleInputChange}
                            type="date"
                            className="bg-gray-200 py-1.5 px-3 focus:outline-none w-[35%]"
                            name="constructionDate"
                            id="constructionDate"
                            value={
                              building.constructionDate ||
                              buildingInfo.calculationDate
                            }
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
                            onChange={handleInputChange}
                            type="date"
                            className="bg-gray-200 py-1.5 px-3 focus:outline-none w-[35%]"
                            name="calculationDate"
                            id="calculationDate"
                            value={
                              building.calculationDate ||
                              buildingInfo.calculationDate
                            }
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
                            onChange={handleInputChange}
                            type="text"
                            className="bg-gray-200 py-1.5 px-3 focus:outline-none w-[35%]"
                            name="softwareVersion"
                            id="softwareVersion"
                            defaultValue={
                              building.softwareVersion ||
                              buildingInfo.softwareVersion
                            }
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Image upload from here */}
                <div
                  className={`border-2 border-gray-300 relative ${
                    imagePreview ? "flex items-center p-5" : "p-10"
                  }`}
                >
                  <input
                    onChange={handleImageChange}
                    type="file"
                    name="image"
                    id="image"
                    className="opacity-0 absolute top-0 left-0 w-full h-full"
                    accept="image/*"
                  />
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Building Preview"
                      className="w-full rounded-lg"
                    />
                  ) : (
                    <label
                      htmlFor="image"
                      className="flex flex-col items-center justify-center w-full h-full cursor-pointer"
                    >
                      <UploadIcon />
                      <span className="text-gray-400">
                        Upload building image
                      </span>
                    </label>
                  )}
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
