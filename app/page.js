import Image from "next/image";
import styles from "./page.module.css";
import Nav from  "@/app/nav/page"
import Anasayfa from  "@/app/anasayfa/page"
import Yetenekler from  "@/app/anasayfa/yetenekler"
import Projeler from  "@/app/projeler/page"
import Footer from  "@/app/footer/page"





export default function Home() {
  return (
    <>
    <Anasayfa/>
    <Yetenekler/>
    <Projeler/>
    <Footer/>

    </>
  );
}
