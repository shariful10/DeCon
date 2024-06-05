const Container = ({ children }) => {
	return (
		<div className="w-full md:w-5/6 mx-auto px-5 md:px-0 h-screen flex flex-col justify-center items-center">
			{children}
		</div>
	);
};

export default Container;
