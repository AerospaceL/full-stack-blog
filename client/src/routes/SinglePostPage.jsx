import Image from "../components/Image";
import { Link } from "react-router-dom";
import PostMenuAction from "../components/PostMenuAction";
import Search from "../components/Search";
import Comments from "../components/Comments";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* detail */}
      <div className="flex gap-8">
        {/* title and otherinfo*/}
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Innovation distinguishes between a leader and a follower.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">John Doe</Link>
            <span>on</span>
            <Link className="text-blue-800">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Do not go where the path may lead, go instead where there is no path
            and leave a trail. You miss 100% of the shots you dont take. Be the
            change that you wish to see in the world.
          </p>
        </div>
        {/* image */}
        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" w="600" className="rounded-2xl"></Image>
        </div>
      </div>

      {/* content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Do not go where the path may lead, go instead where there is no path
            and leave a trail. You miss 100% of the shots you dont take. Be the
            change that you wish to see in the world. Do not go where the path
            may lead, go instead where there is no path and leave a trail. You
            miss 100% of the shots you dont take. Be the change that you wish to
            see in the world.
          </p>
          <p>
            Do not go where the path may lead, go instead where there is no path
            and leave a trail. You miss 100% of the shots you dont take. Be the
            change that you wish to see in the world. Do not go where the path
            may lead, go instead where there is no path and leave a trail. You
            miss 100% of the shots you dont take. Be the change that you wish to
            see in the world. Do not go where the path may lead, go instead
            where there is no path and leave a trail. You miss 100% of the shots
            you dont take. Be the change that you wish to see in the world. Do
            not go where the path may lead, go instead where there is no path
            and leave a trail. You miss 100% of the shots you dont take. Be the
            change that you wish to see in the world.
          </p>
          <p>
            Do not go where the path may lead, go instead where there is no path
            and leave a trail. You miss 100% of the shots you dont take. Be the
            change that you wish to see in the world. Do not go where the path
            may lead, go instead where there is no path and leave a trail. You
            miss 100% of the shots you dont take. Be the change that you wish to
            see in the world. Do not go where the path may lead, go instead
            where there is no path and leave a trail. You miss 100% of the shots
            you dont take. Be the change that you wish to see in the world.
          </p>
          <p>
            Do not go where the path may lead, go instead where there is no path
            and leave a trail. You miss 100% of the shots you dont take. Be the
            change that you wish to see in the world. Do not go where the path
            may lead, go instead where there is no path and leave a trail. You
            miss 100% of the shots you dont take. Be the change that you wish to
            see in the world. Do not go where the path may lead, go instead
            where there is no path and leave a trail. You miss 100% of the shots
            you dont take. Be the change that you wish to see in the world.
          </p>
          <p>
            Do not go where the path may lead, go instead where there is no path
            and leave a trail. You miss 100% of the shots you dont take. Be the
            change that you wish to see in the world. Do not go where the path
            may lead, go instead where there is no path and leave a trail. You
            miss 100% of the shots you dont take. Be the change that you wish to
            see in the world. Do not go where the path may lead, go instead
            where there is no path and leave a trail. You miss 100% of the shots
            you dont take. Be the change that you wish to see in the world.
          </p>
          <p>
            Do not go where the path may lead, go instead where there is no path
            and leave a trail. You miss 100% of the shots you dont take. Be the
            change that you wish to see in the world. Do not go where the path
            may lead, go instead where there is no path and leave a trail. You
            miss 100% of the shots you dont take. Be the change that you wish to
            see in the world. Do not go where the path may lead, go instead
            where there is no path and leave a trail. You miss 100% of the shots
            you dont take. Be the change that you wish to see in the world.
          </p>
        </div>

        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          {/* Author Part */}
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <Image
                src="userImg.jpeg"
                className="w-12 h-12 rounded-full object-cover"
                w="48"
                h="48"
              ></Image>
              <Link className="text-blue-800">John Doe</Link>
            </div>
            <p className="text-sm text-gray-500">
              leave a trail. You miss 100%{" "}
            </p>
            {/* icons */}
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg"></Image>
              </Link>
              <Link>
                <Image src="instagram.svg"></Image>
              </Link>
            </div>
          </div>

          {/* Actions Part */}
          <PostMenuAction></PostMenuAction>

          {/* Categories */}
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">
              Web Design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              Database
            </Link>
            <Link className="underline" to="/">
              Search Engines
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
          </div>

          {/* Search */}
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search></Search>
        </div>
      </div>

      {/* Comment */}
      <Comments></Comments>
    </div>
  );
};

export default SinglePostPage;
