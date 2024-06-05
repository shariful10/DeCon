import Container from "../components/container/Container";

export default function ConstructionsType() {
  return (
    <Container>
      <div className="flex justify-center items-center gap-10 h-screen w-full">
        <p className="min-w-max">Select the construction type: </p>

        <div className="flex flex-col gap-5 max-w-mix w-full">
          <Button>Timber</Button>
          <Button>Steel</Button>
          <Button>Concrete</Button>
          <Button>Hybrid</Button>
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
