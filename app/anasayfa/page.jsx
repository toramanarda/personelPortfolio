import profile from "@/assets/ardatrmn.jpg";
import Image from "next/image";


export default function Hero() {
  return (
    <>
      <div className="hero-container">
        <Image src={profile} alt="profile pic" width={380} height={450} />

        <div className="hero-content-area">
          <h3>
            <span className="arda">Arda Toraman</span>,
          </h3>
          <div className="hero-content">
            <p>
              Çocukluğumdan beri bilgisayar oyunlarına duyduğum ilgi, yazılım dünyasına olan yolculuğumun ilk adımı oldu. Oynadığım oyunlara geliştirdiğim modlarla yazılıma merak sardım ve 14 yaşımda ilk yazılım sertifikamı kazandım. Aktif olarak 5 yıldır web geliştirme alanında kendimi geliştiriyorum ve çalışıyorum. Bu süreçte, Gençlik ve Spor Bakanlığında web yazılım eğitmenliği yaparak deneyim kazandım ve Acunmedya Akademide Genişletilmiş Frontend uzmanlık eğitimi aldım. Şu anda, Gedik Üniversitesinde Yönetim Bilişim Sistemleri bölümünde eğitimime devam ediyorum.

              Güçlü bir teknik altyapıya sahip olup, sürekli öğrenmeye ve kendimi geliştirmeye odaklı bir web geliştiricisiyim. Projelerde yenilikçi çözümler üreterek, kullanıcı deneyimini en üst seviyeye çıkarmayı hedefliyorum.
            </p>
          </div>
          <a className="contactBtn" href="mailto:toramanarda245@gmail.com">Bana Ulaşın</a>
        </div>
      </div>


    </>
  );
}
