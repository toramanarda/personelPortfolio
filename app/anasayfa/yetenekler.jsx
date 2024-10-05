import Image from "next/image";
import html from "@/assets/html.png";
import css from "@/assets/css.png";
import js from "@/assets/js.png";
import git from "@/assets/git.png";
import figma from "@/assets/figma.png";
import react from "@/assets/react.png";
import nextjs from "@/assets/nextjs.png";
import postman from "@/assets/postman.png";

export default function Yetenekler(){
  return(
    <div className="ability-area">
      <h3>Yetenekler</h3>
      <div className="yetenekler">
        <div className="yetenek-item">
          <Image src={html} alt="html" width={65} height={65} />
        </div>
        <div className="yetenek-item">
          <Image src={css} alt="css" width={65} height={65} />
        </div>
        <div className="yetenek-item">
          <Image src={js} alt="js" width={65} height={65} />
        </div>
        <div className="yetenek-item">
          <Image src={react} alt="react" width={65} height={65} />
        </div>
        <div className="yetenek-item">
          <Image src={nextjs} alt="nextjs" width={65} height={65} />
        </div>
        <div className="yetenek-item">
          <Image src={figma} alt="figma" width={65} height={65} />
        </div>
        <div className="yetenek-item">
          <Image src={git} alt="git" width={65} height={65} />
        </div>
        <div className="yetenek-item">
          <Image src={postman} alt="postman" width={65} height={65} />
        </div>
      </div>
    </div>
  )
}
