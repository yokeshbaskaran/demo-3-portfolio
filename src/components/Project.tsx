import Image from "next/image";
import Link from "next/link";

export interface ProjectItemProps {
  title: string
  description: string
  linkUrl: string
  image: string
}

const Project = (props: ProjectItemProps) => {

  return (
    <>
      <section className="my-2 flex gap-4">
        <div className="relative w-24 h-16">
          <Image
            src={props.image}
            layout="fill"
            // width={250}
            // height={250}
            alt="coding"
          />
        </div>
        <div className="my-auto">
          <Link href={props.linkUrl}>
            <span className="font-bolf underline hover:text-indigo-600">
              {props.title}
            </span>
          </Link>
          <div>{props.description}</div>
        </div>
      </section>
    </>
  );
};

export default Project;






// import Image from "next/image";
// import Link from "next/link";

// const Project = () => {
//   const title: string = "Data App";
//   const description: string = "Processed Data";
//   const linkUrl: string = "/project"

//   return (
//     <>
//       <section className="flex gap-4">
//         <div className="relative w-24 h-16">
//           <Image
//             src={"/coding.jpg"}
//             layout="fill"
//             // width={250}
//             // height={250}
//             alt="coding"
//           />
//         </div>
//         <div className="my-auto">
//           <Link href={linkUrl}>
//             <span className="font-bolf underline hover:text-indigo-600">
//               {title}
//             </span>
//           </Link>
//           <div>{description}</div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Project;



