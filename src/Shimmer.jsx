export const Shimmer = () => {
  return (
    <>
      {Array(9)
        .fill("")
        .map((v, i) => (
          <div
            key={i}
            className="border border-black rounded-md flex flex-col justify-center bg-gray-200 items-center p-3"
          >
            <div className="w-84 h-84 "></div>
          </div>
        ))}
    </>
  );
};
