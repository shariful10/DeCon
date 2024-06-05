import { useDispatch, useSelector } from "react-redux";
import Container from "../components/container/Container";
import { addConstructionType } from "../redux/features/constructionTypeSlice";

export default function ConstructionsType() {
  const dispatch = useDispatch();
  const constructionType = useSelector(
    (state) => state.constructionType.construction_type
  );

  console.log("constructionType -> ", constructionType);

  const handleType = (e) => {
    console.log("type -> ", e);
    dispatch(addConstructionType(e));
  };

  return (
    <Container>
      <div className="flex justify-center items-center gap-10 h-screen w-full">
        <p className="min-w-max">Select the construction type: </p>

        <div className="flex flex-col gap-5 max-w-mix w-full">
          <Button onClick={() => handleType("timber")}>Timber</Button>
          <Button onClick={() => handleType("steel")}>Steel</Button>
          <Button onClick={() => handleType("concrete")}>Concrete</Button>
          <Button onClick={() => handleType("hybrid")}>Hybrid</Button>
        </div>
      </div>
    </Container>
  );
}

// select type of construction
function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border border-black py-3 bg-red-100 max-w-40 text-center hover:bg-red-200 transition duration-300 ease-in-out"
    >
      {children}
    </button>
  );
}
