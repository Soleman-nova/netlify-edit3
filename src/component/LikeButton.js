import React, { useState } from "react";
import { Heart } from "lucide-react"; // Importing Heart icon from lucide-react

const LikeButton = () => {
  const [liked, setLiked] = useState(false); // State to track like status

  const toggleLike = () => {
    setLiked(!liked); // Toggle state when clicked
  };

  return (

    <button
      onClick={toggleLike}
      className="p-2 rounded-full transition duration-300"
    >
      <Heart
        size={32}
        color={liked ? "red" : "black"}
        fill={liked ? "red" : "white"}
      />
    </button>
  );
};

export default LikeButton;
