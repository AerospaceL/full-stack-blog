import Image from "./Image";
import { Link } from "react-router-dom";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* iamge */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image
          src="postImg.jpeg"
          className="rounded-2xl object-cover"
          w="735"
        ></Image>
      </div>
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          Innovation distinguishes between a leader and a follower.
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-blue-800">John Doe</Link>
          <span>on</span>
          <Link className="text-blue-800">Web Design</Link>
          <span>2 days ago</span>
        </div>
        <p>
          Do not go where the path may lead, go instead where there is no path
          and leave a trail. You miss 100% of the shots you don’t take. Be the
          change that you wish to see in the world. The only limit to our
          realization of tomorrow is our doubts of today.
        </p>
        <Link to="/test" className="underline text-sm text-blue-800">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
