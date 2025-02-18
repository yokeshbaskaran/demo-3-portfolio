import Image from "next/image";
import Link from "next/link";

interface ProjectItemProps {
  title: string;
  desc: string;
  linkURL: string;
  image: string;
}

const ProjectItem = ({ title, desc, image, linkURL }: ProjectItemProps) => {
  return (
    <>
      <div className="w-[95%] mx-auto  my-2 py-2 text-sm flex items-start gap-2">
        <div className="w-[30%] h-24 relative">
          <Image src={image} fill={true} alt="images" />
        </div>
        <div className="w-[65%] ">
          <Link href="#">
            <h2 className=" text-txfirst text-xl font-medium underline">
              {title}
            </h2>
          </Link>
          <span className="line-clamp-3 text-txsecond">{desc}</span>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
