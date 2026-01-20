export const Meme = ({ data }) => {
  const { url, author, title } = data;
  return (
    <div className="border border-black rounded-md flex flex-col justify-center items-center p-3">
      <img className="w-84 h-84" src={url} alt={title} />
      <p>{author}</p>
    </div>
  );
};
