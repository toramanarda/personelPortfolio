import Link from "next/link";
import linkedin from "@/assets/linkedin.svg";
import github from "@/assets/github.svg";
import cv from "@/assets/cv.svg";

import Image from "next/image";


export default function Footer() {
  return (
    <>
      <div className="navigator">
        <h4><Link href="/">Arda Toraman</Link></h4>
        <a className="footerContactBtn" href="mailto:toramanarda245@gmail.com">Bana Ulaşın</a>


        <ul className="socialmedia">
          <li>
            <a href="https://www.linkedin.com/in/arda-toraman-436297300/?trk=people-guest_people_search-card" target="_blank" >
              <Image src={linkedin} alt="LinkedIn" width={24} height={24} />
            </a>
          </li>
          <li>
            <a href="https://github.com/toramanarda" target="_blank" >
              <Image src={github} alt="Github" width={24} height={24} />
            </a>
          </li>
          <li>
            <a href="https://toramanarda.com.tr/assets/references/ARDATORAMANCV.pdf" target="_blank" rel="noopener noreferrer" >
              <Image src={cv} alt="cv" width={24} height={24} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
