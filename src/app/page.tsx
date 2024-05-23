import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Profile from "@/components/Profile";
import Project, { ProjectItemProps } from "@/components/Project";


export default function Home() {

  const projectMetaDataArray = []

  projectMetaDataArray.push({
    title: "Data App",
    description: "Processed Data concepts",
    linkUrl: "/project",
    image: "/coding.jpg"
  })

  projectMetaDataArray.push({
    title: "Social Media App",
    description: "Processed Data concepts",
    linkUrl: "/project",
    image: "/img1.jpg"
  })

  projectMetaDataArray.push({
    title: "Weather App",
    description: "Processed Data concepts",
    linkUrl: "/project",
    image: "/coding.jpg"
  })

  const projectElements = []
  for (let i = 0; i < projectMetaDataArray.length; i++) {
    const metaData = projectMetaDataArray[i];
    const element = <Project {...metaData} key={i} />
    projectElements.push(element)
  }

  return (
    <>
      <Layout>
        <section className="text-slate-700 flex flex-col gap-6">
          <Header />
          <Profile />
          <div className="mt-1 flex flex-col">
            {projectElements}
            {/* <Project title="nothing data" description={description} linkUrl={linkUrl} image={image} /> */}
          </div>
          <Footer />
        </section>
      </Layout>
    </>
  );
}
