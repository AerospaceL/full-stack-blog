import Image from "./Image";
const Comment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <Image
          src="userImg.jpeg"
          className="w-10 h-10 rounded-full object-cover"
          w="40"
        ></Image>
        <span className="font-medium">John Doe</span>
        <span className="text-sm text-gray-500">2 days ago</span>
      </div>

      <div className="mt-4">
        <p>
          You miss 100% of the shots you dont take. Be the change that you wish
          to see in the world. Do not go where the path may lead, go instead
          where there is no path and leave a trail. You miss 100% of the shots
          you dont take. Be the change that you wish to see in the world.
        </p>
      </div>
    </div>
  );
};

export default Comment;
