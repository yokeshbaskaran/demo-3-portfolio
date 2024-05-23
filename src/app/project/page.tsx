import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import image1 from "../../../public/coding.jpg"

export default function ProjectItem() {
    return (
        <>
            <Layout>
                <section className="text-slate-700 flex flex-col gap-6">
                    <Header />
                    <div>
                        <Image src={image1} alt="coding" />
                        <div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, quo commodi. Alias suscipit earum nihil enim, neque odit expedita. Illo laboriosam obcaecati placeat in qui? Hic perferendis nobis quasi fugiat eius mollitia. Nisi temporibus expleum fugiat quam tempore ipsa.</p>
                        </div>

                        <Link href='/'>
                            <p className="font-bolf underline hover:text-indigo-600">
                                back
                            </p>
                        </Link>
                    </div>
                    <Footer />
                </section>
            </Layout >
        </>
    );
}
