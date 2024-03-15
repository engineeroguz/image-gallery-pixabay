const Card = ({ image }) => {
  const tags = image.tags.split(",");
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-xl">
      <img className="w-full" src={image.webformatURL} alt="" />
      <div className="px-6 py-4">
        <div className="font-bold text-orange-500 text-xl mb-3">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="rounded-full inline-block bg-blue-300 px-3 py-1 mb-1 text-sm font-semibold text-blue-900 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
