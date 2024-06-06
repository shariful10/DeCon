import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Container from "../components/container/Container";
import Button from "../components/utils/Button";
import { addConstructionType } from "../redux/features/constructionTypeSlice";

export default function ConstructionsType() {
  const dispatch = useDispatch();
  const constructionType = useSelector(
    (state) => state.constructionType.construction_type
  );

  console.log("constructionType ", constructionType);

  const handleType = (e) => {
    // console.log("type -> ", e);
    dispatch(addConstructionType(e));
  };

  return (
    <Container>
      <div className="flex justify-evenly items-center gap-10 h-screen w-full relative">
        <div className="flex justify-evenly items-center gap-10 max-h-max w-full relative">
          <p className="min-w-max">Select the construction type: </p>

          <div className="flex flex-col gap-5 min-w-60">
            <ButtonType
              onClick={() => handleType("timber")}
              active={constructionType === "timber"}
            >
              Timber
            </ButtonType>
            <ButtonType
              onClick={() => handleType("steel")}
              active={constructionType === "steel"}
            >
              Steel
            </ButtonType>
            <ButtonType
              onClick={() => handleType("concrete")}
              active={constructionType === "concrete"}
            >
              Concrete
            </ButtonType>
            <ButtonType
              onClick={() => handleType("hybrid")}
              active={constructionType === "hybrid"}
            >
              Hybrid
            </ButtonType>
          </div>

          <div className="flex items-end max-h-max">
            {constructionType && (
              <Link to="#" className="absolute bottom-0 -translate-x-1/2">
                <Button btnTitle="Next" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}

// select type of construction
function ButtonType({ children, onClick, active }) {
  return (
    <button
      onClick={onClick}
      className={`border border-black py-3 bg-red-100 max-w-40 text-center hover:bg-red-200 transition duration-300 ease-in-out ${
        active && "border-2 font-bold"
      }`}
    >
      {children}
    </button>
  );
}
