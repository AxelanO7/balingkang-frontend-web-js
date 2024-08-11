import { React, useState } from "react";
import { Collapse } from "react-bootstrap";
import header_main from "../../assets/header_main.jpg";
import illust_history from "../../assets/illust_history.png";
import FooterComponent from "../../layouts/FooterComponent";
import NavbarComponent from "../../layouts/NavbarComponent";

const MainPage = () => {
  const [collapse1, setCollapse1] = useState(false);
  const [collapse2, setCollapse2] = useState(false);
  const [collapse3, setCollapse3] = useState(false);
  const [collapse4, setCollapse4] = useState(false);

  return (
    <div className="main_page" id="#main_page">
      <NavbarComponent />
      {/* header section */}
      <section id="header_home" className="header_home">
        <div
          className="container-xxl-fluid py-3 d-flex justify-content-center align-items-center"
          style={{
            backgroundImage: `url(${header_main})`,
            backgroundSize: "cover",
            height: "100vh",
          }}
        >
          <div
            className="row bg-white justify-content-center align-items-center rounded mx-5 mt-5"
            // style={{ width: "90%", opacity: "0.95", height: "75%" }}
            style={{ opacity: "0.95", height: "85%" }}
          >
            <div className="col-6">
              {/* <img
                src={illust_welcome}
                alt="hero_main_2"
                className="img-fluid"
              /> */}
              <section id="features" className="features py-2">
                <div className="container-fluid" data-aos="fade-up">
                  {/* <div className="section-title">
                    <h2
                      className="text-center mt-5 mb-5"
                      style={{ color: "#A20404" }}
                    >
                      Menu Website
                    </h2>
                    <div class="row">
                      <p>Berbagai fitur yang tersedia dalam website ini </p>
                    </div>
                  </div> */}

                  <div className="row">
                    <div
                      className="col-xl-6 col-md-10 align-items-stretch mt-4 mt-xl-0"
                      data-aos="zoom-in"
                      data-aos-delay="100"
                    >
                      <div className="icon-box">
                        <div className="icon"></div>
                        <h4>
                          <a href="/structure#piodalan_structure">Piodalan</a>
                        </h4>
                        <p className="text-secondary">
                          Jelajahi Pura Dalem Balingkang <br />
                          secara virtual
                        </p>
                      </div>
                    </div>

                    <div
                      className="col-xl-6 col-md-10 align-items-stretch mt-4 mt-xl-0"
                      data-aos="zoom-in"
                      data-aos-delay="100"
                    >
                      <div className="icon-box">
                        <div className="icon"></div>
                        <h4>
                          <a href="#history">Sejarah</a>
                        </h4>
                        <p className="text-secondary">
                          Sejarah Pura Dalem Balingkang menurut beberapa sumber
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div
                      className="col-xl-6 col-md-10 align-items-stretch mt-4 mt-xl-0"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                    >
                      <div className="icon-box">
                        <div className="icon">
                          <i className="fa-brands fa-bootstrap"></i>
                        </div>
                        <h4>
                          <a href="structure">Struktur</a>
                        </h4>
                        <p className="text-secondary">
                          Struktur bangunan-bangunan Pura Dalem Balingkang
                        </p>
                      </div>
                    </div>

                    <div
                      className="col-xl-6 col-md-10 align-items-stretch mt-4 mt-xl-0"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    >
                      <div className="icon-box">
                        <div className="icon">
                          <i className="bx bx-tachometer"></i>
                        </div>
                        <h4>
                          <a href="documentation">Dokumentasi</a>
                        </h4>
                        <p className="text-secondary">
                          Foto & video yang diambil di Pura Dalem Balingkang
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="col-4 my-auto text-center">
              <h2 style={{ color: "#3F3D56", fontWeight: "bolder" }}>
                Selamat Datang <br />
                Di Website
              </h2>
              <h1 style={{ color: "#A20404" }}>Pura Dalem Balingkang</h1>
            </div>
          </div>
        </div>
      </section>
      {/*akhir header section */}

      {/* fitur section*/}
      {/* <section id="features" class="features section-bg pb-5">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2 className="text-center mt-5 mb-5" style={{ color: "#A20404" }}>
              Menu Website
            </h2>
            <div class="row">
              <p>Berbagai fitur yang tersedia dalam website ini </p>
            </div>
          </div>

          <div className="row">
            <div
              className="col-xl-3 col-md-10 align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="icon-box">
                <div className="icon"></div>
                <h4>
                  <a href="/structure#piodalan_structure">Piodalan</a>
                </h4>
                <p className="text-secondary">
                  Jelajahi Pura Dalem Balingkang <br />
                  secara virtual
                </p>
              </div>
            </div>

            <div
              className="col-xl-3 col-md-10 align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="icon-box">
                <div className="icon"></div>
                <h4>
                  <a href="#history">Sejarah</a>
                </h4>
                <p className="text-secondary">
                  Sejarah Pura Dalem Balingkang menurut beberapa sumber
                </p>
              </div>
            </div>

            <div
              className="col-xl-3 col-md-10 align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="fa-brands fa-bootstrap"></i>
                </div>
                <h4>
                  <a href="structure">Struktur</a>
                </h4>
                <p className="text-secondary">
                  Struktur bangunan-bangunan Pura Dalem Balingkang
                </p>
              </div>
            </div>

            <div
              className="col-xl-3 col-md-10 align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-tachometer"></i>
                </div>
                <h4>
                  <a href="documentation">Dokumentasi</a>
                </h4>
                <p className="text-secondary">
                  Foto & video yang diambil di Pura Dalem Balingkang
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* akhir fitur section */}

      {/* sejarah Section */}
      <section
        id="history"
        className="history section-bg d-flex align-items-center"
        style={{ background: "#A20404", height: "100vh" }}
      >
        <div className="container-fluid" data-aos="fade-up">
          <div className="row">
            <div
              className="col-lg-5 align-items-stretch order-1 order-lg-2 img"
              style={{ backgroundImage: `url(${illust_history})` }}
              //   style='background-image: url("assets/img/why-us.png");'
              data-aos="zoom-in"
              data-aos-delay="150"
            />
            <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
              <div className="content">
                <h3>
                  Sejarah
                  <br></br>
                  <strong>Pura Dalem Balingkang</strong>
                </h3>
                <p>
                  Sejarah pura dalem balingkang menurut beberapa sumber yang
                  menjelaskan asal muasal pura dalam balingkang
                </p>
              </div>
              <div className="accordion-list">
                <ul>
                  <li>
                    <a
                      href="#home"
                      className="collapse"
                      onClick={() => setCollapse1(!collapse1)}
                      aria-controls="collapseId1"
                    >
                      <span>01</span> Secara Umum
                      <i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </a>
                    <div
                      id="accordion-list-1 collapse"
                      className="collapse show"
                    >
                      <Collapse in={collapse1}>
                        <p id="collapseId1">
                          Pura Dalem Balingkang berdiri megah pada lahan seluas
                          15 hektar di wilayah Desa Pakraman Pinggan, Kecamatan
                          Kintamani, Kabupaten Bangli. Untuk menuju Pura Dalem
                          Balingkang, harus turun dari Pura Pucak Penulisan
                          menuju Banjar Paketan di Desa Pakraman Sukawana. Dari
                          Banjar Paketan menuruni jalan berliku dengan panorama
                          indah deretan gunung Batur, gunung Abang, dan gunung
                          Agung menuju Pura Dalem Balingkang. Pura Pucak
                          Penulisan merupakan hulunya Pura Dalem Balingkang,
                          karena Pura Dalem Balingkang tepat menghadap ke Pura
                          Pucak Penulisan. Pura Dalem Balingkang seolah-olah
                          dikelilingi oleh tembok yang terdiri dari bubungan
                          berupa perbukitan yang melingkari kawah gunung Batur
                          terletak di sebelah timur, barat, utara dan selatan.
                          Di samping itu juga dikelilingi oleh sungai Melilit
                          yang merupakan sumber mata air bagi masyarakat
                          sekitarnya. Pura Dalem Balingkang terletak di sebelah
                          barat kurang lebih 2,5 kilometer dari pemukiaman atau
                          perumahan masyarakat Desa Pakraman Pinggan.
                        </p>
                      </Collapse>
                    </div>
                  </li>

                  <li>
                    <a
                      href="#home"
                      className="collapse"
                      onClick={() => setCollapse2(!collapse2)}
                      aria-controls="collapseId1"
                    >
                      <span>02</span> Berdasarkan Purana
                      <i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </a>
                    <div
                      id="accordion-list-1 collapse"
                      className="collapse show"
                    >
                      <Collapse in={collapse2}>
                        <p id="collapseId1">
                          Purana Pura Dalem Balingkang menyebutkan bahwa
                          maharaja Sri Haji Jayapangus beristana di gunung
                          Panarajon. Sejarah Pura Dalem Balingkang Berdasarkan
                          Purana. Dalam Purana tahun 2009 ini disebutkan,
                          tentang kisah Sri Aji Jayapangus dari kerajaan Bali
                          Kuno yang berstana di gunung Panarajon (kerajaan
                          Panarajon), dalam pemerintahannya sang Raja didampingi
                          oleh permaisuri yang bergelar Sri Parameswari Induja
                          Ketana, seorang permaisuri yang bijak, berasal dari
                          keturunan Bali Mula di danau Batur. Pada masa
                          pemerintahanya Raja memiliki seorang senopati bernama
                          Mpu Nirjamna, memiliki dua orang penasehat bergelar
                          Mpu Lim dan Mpu Siwa Gandhu. Mpu Lim memiliki seorang
                          dayang cantik bernama Kang Cing We anak seorang
                          Subandar Cina yang memperistri Jangir dari Bali. Putri
                          Subandar ini berparas ayu, sehingga menggugah
                          keinginan sang raja untuk memperistri Kang Cing We,
                          mengetahui keinginan sang Raja, penasehat raja yaitu
                          Mpu Siwa Gandhu, memberikan saran kepada baginda raja
                          bahwa pernikahan tersebut tidak tepat karena beda
                          keyakinan Hindu dengan Budha, nasehat tersebut tidak
                          diindahkan dan raja marah sehingga Mpu Siwa Gandu
                          diberhentikan jadi penasehat kerajaan. Akhirnya
                          upacara pernikahan tersebutpun dilangsungkan
                          disaksikan rohaniawan Hindu dan Budha. I Subandar
                          memberikan dua keping uang Cina (uang kepeng) sebagai
                          bekal putrinya mengabdi kepada raja dan agar nantinya
                          raja menganugerahkan dua keping uang kepeng tersebut
                          kepada rakyatnya untuk melengkapi sarana upacara di
                          kemudian hari. Merasa nasehat Mpu Siwa Gandhu tidak
                          diindahkan, maka marahlah sang Mpu, kemudian beliau
                          melakukan tapa semadi dengan khusuk memohon agar
                          terjadi angin puting beliung disertai hujan lebat
                          selama satu bulan tujuh hari, karena kekhusukanya
                          permohonan tersebut dikabulkan oleh para Dewa,
                          sehingga terjadilah musibah angin ribut disertai hujan
                          lebat terus menerus, sehingga raja diiringi sisa
                          abdinya mengungsi ke tengah hutan desa Jong Les.
                          Dimulai dengan upacara yadnya kemudian merambah hutan
                          tersebut dan berhasil membangun keraton dan tempat
                          suci dinamakan bernama Kuta Dalem, bangunan suci
                          kerajaan dinamakan Balingkang. Disini beliau berhasil
                          memusatkan pikiran dan bisa memerintah dan
                          sejahteralah kembali rakyatnya. Beliau didampingi dua
                          permaisuri yang selalu mengabih singgasananya, pada
                          sisi kanan permaisuri bergelar Sri Prameswari Induja
                          ketana dan sebelah kiri bergelar Sri Mahadewi
                          Sasangkaja Cihna atau Kang Cing We.
                        </p>
                      </Collapse>
                    </div>
                  </li>

                  <li>
                    <a
                      href="#home"
                      className="collapse"
                      onClick={() => setCollapse3(!collapse3)}
                      aria-controls="collapseId1"
                    >
                      <span>03</span> Berdasarkan Kekawin Barong Landung
                      <i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </a>
                    <div
                      id="accordion-list-1 collapse"
                      className="collapse show"
                    >
                      <Collapse in={collapse3}>
                        <p id="collapseId1">
                          Dalam kekawin atau geguritan Barong Landung,
                          mengisahkan perjalanan Raja Sri Aji Jayapangus yang
                          memperistri putri China Kang Cing We yang ditulis oleh
                          I Nyoman Suprapta. Dalam Kekawin tersebut dikisahkan,
                          Sri Aji Jayapangus adalah seorang raja tersohor dan
                          bijaksana berstana di Kerajaan Bukit Panarajon. Dengan
                          permaisuri Dewi Danuh seorang puteri keturunan Bali
                          Mula. Seiring waktu datang seorang pedagang dari China
                          bersama puteri cantik bernama Kang Cing We yang
                          kemudian menjadi abdi atau dayang Mpu Lim seorang
                          penasehat raja. Keberadaan Kang Cing We di lingkungan
                          kerajaan sebagai pelayan Mpu Lim diketahui oleh raja,
                          kemudian sang raja berniat memperistri putri Kang Cing
                          We, yang sebenarnya tidak disetujui oleh Mpu Siwa
                          Gandu yang merupakan salah satu penasehat raja.
                          Keinginan raja akhirnya terwujud acara pernikahan
                          dilangsungkan, yang akhirnya membuat Mpu Siwa Gandu
                          menjadi marah, dalam tapa semadinya beliau memohon
                          agar tercipta bencana di kerajaan Kerajaan Panarogan.
                          Akhirnya kerajaan tersebut hancur dan Raja Sri Haji
                          Jayapangus pindah merambah tempat baru di Jong Les dan
                          sekarang dikenal Dalem Balingkang. Pernikahan raja
                          dengan Dewi Danuh, memiliki seorang Putera bernama
                          Mayadenawa dan kemudian diangkat menjadi raja
                          Bedahulu, sedangkan dengan Kang Cing We tidak memiliki
                          keturunan. Dewi Danuh akhirnya moksa. Kang Cing We
                          sendiri tidak memiliki keturunan untuk penerus
                          kerajaan maka beliau minta ijin untuk kepada Kang Cing
                          We untuk melakukan tapa semadi di Gunung Batur seraya
                          memohon agar dikaruniai keturunan. Sesampai di puncak
                          Gunung Batur, bertemulah beliau dengan seorang puteri
                          cantik yang merupakan jelmaan dari seorang Dewi yang
                          bertujuan menggoda tapa Raja Sri Jayapangus, puteri
                          cantik tersebut adalah jelmaan Dewi Danuh. Karena
                          kecatikannya tergodalah sang raja dan mengaku belum
                          beristri. Lama tidak berkabar, maka berangkatlah Kang
                          Cing We dari keraton Dalem Balingkang menyusul ke
                          tempat pertapaan raja, sesampai di tempat pertapaan
                          terkejut dan marahlah Kang Cing melihat raja sedang
                          memadu kasih dengan seorang puteri cantik. Kang Cing
                          We memaki-maki puteri tersebut yang tak lain adalah
                          penjelmaan seorang Dewi, karena merasa dimaki oleh
                          seorang manusia, Dewi Danuh juga marah mengeluarkan
                          api, melebur dan membakar Kang Cing We. Mengetahui
                          kematian permaisurinya raja menjadi sedih. Dan sebagai
                          hukumannya karena mengaku belum beristri, Sri Aji
                          Jayapangus juga dilebur oleh sang Dewi sehingga
                          menjadi abu. Rakyat Dalem Balingkang menjadi sedih
                          mengetahui kedua junjungannya telah menjadi abu, dan
                          memohon agar keduanya dihidupkan kembali. Melihat
                          ketulusan hati dari para abdi dan rakyat Dalem
                          Balingkang, sang Dewi akhirnya mengabulkan permintaan
                          rakyat Dalem Balingkang, namun dalam bentuk Lingga
                          saja berupa Barong Landung lanang dan istri (laki dan
                          perempuan). Sang Dewi memerintahkan agar Barong
                          Landung tersebut dibawa kekeraton Dalem Balingkang,
                          dianugerahkan bahwa kedua lingga tersebut akan
                          memerintah dari alam niskala yang mampu memberikan
                          perlindungan bagi rakyat Dalem Balingkang.
                        </p>
                      </Collapse>
                    </div>{" "}
                  </li>

                  <li>
                    <a
                      href="#home"
                      className="collapse"
                      onClick={() => setCollapse4(!collapse4)}
                      aria-controls="collapseId1"
                    >
                      <span>04</span> Berdasarkan Mitos Masyarakat Sekitar
                      <i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </a>
                    <div
                      id="accordion-list-1 collapse"
                      className="collapse show"
                    >
                      <Collapse in={collapse4}>
                        <p id="collapseId1">
                          Asal-usul atau sejarah Dalem Balingkang berkembang
                          juga di masyarakat, menjadi sebuah kisah mitos yang
                          melegenda di kalangan masyarakat seputaran Dalem
                          Balingkang. Diceritakan pada jaman dahulu seorang raja
                          bernama Sri Jayapangus memerintah di Bukit Panarajon.
                          Raja memiliki seorang permaisuri yang tidak memiliki
                          keturunan sehingga dijuluki Dewi Mandul. Raja menjadi
                          khawatir karena tidak memiliki generasi penerus untuk
                          melanjutkan pemerintahan di tahta kerajaan di keraton
                          Bukit Panarajon. Suatu ketika, raja jalan-jalan di
                          pasar, ketemulah dengan seorang wanita cantik
                          keturunan Cina, karena kecantikan wanita tersebut
                          berniatlah beliau mengawininya dengan diam-diam tanpa
                          sepengetahuan keluarga, pejabat dari pihak kerajaan
                          dan tanpa upacara yadnya. Pernikahan diam-diampun
                          dilakukan. Namun tentunya Tuhan maha tahu, oleh
                          Bhatara Siwa, Raja Sri Jayapangus dusir dari Panarajon
                          karena kesalahan beliau kawin diam-diam tanpa upacara
                          yadnya,yang tidak pantas dilakukan oleh seorang raja.
                          Akhirnya Raja Sri Jayapangus bersama kedua
                          permaisurinya meninggalkan kerajaan dan turun bukit
                          menyusuri hutan ke arah Timur Laut, saat perjalanan
                          puting beliung dan hujan deras tanpa henti, tanpa
                          mengenal terus melanjutkan perjalanan. Saat sampai di
                          Gunung Lebih beliau beristirahat dan melakukan semadi
                          dan memohon petunjuk kepada para dewa, akhirnya
                          didapatkan petunjuk atau pewisik, untuk melanjutkan
                          perjalanan, sampai hujan dan berhenti dan memasang
                          tanda untuk membangun sebuah keraton. Akhirnya
                          perjalananpun dilanjutkan, sesuai petunjuk saat hujan
                          reda beliau berhenti dan memasang tanda, tempat
                          tersebut bernama Dharma Anyar sebuah tempat yang juga
                          menjadi tempat pertapaan para maha rsi dan mpu. Dan di
                          Dharma Anyar beliau membangun keraton kerajaan dan
                          juga tempat suci yang bernama Balingkang. Pernikahan
                          Sri Jayapangus dengan Putri Cina yang dikenal juga
                          dengan nama Dewi Danuh, menghasilkan seorang Putera
                          bernama Mayadenawa, dinobatkan menjadi raja Bedahulu
                          di pejeng. Kerjaan Balingkang akhirnya berhasil
                          dikalahkan oleh Kerajaan Majapahit, dan bekas kerajaan
                          Balingkang dijadikan tempat pemujaan yang sekarang ini
                          dinamakan Dalem Balingkang. Di Pura ini dipercaya
                          sebagai tempat stana dari Ida Bhatara Dalem Balingkang
                          atau Raja Sri Jayapangus, beliau disucikan dalam
                          bentuk upacara yadnya dan disetarakan dengan Dewa Siwa
                          ataupun Dewa Surya oleh para pemuja-Nya. Sejumlah
                          versi yang berkembang di masyarakat, dan mungkin saja
                          ada versi lainnya, namun demikian yang bisa kita garis
                          bawahi sudah terjadi akulturasi budaya Hindu dengan
                          Budha dari jaman nenek moyang Bali Kuno, termasuk juga
                          warisan budaya, sekiranya berhubungan dengan asal-usul
                          atau sejarah keberadaan Dalem Balingkang. Seperti
                          sejumlah pura di Bali terdapat juga pemujaan untuk
                          etnis Cina seperti bentuk pagoda atapun kongco,
                          penggunaan uang kepeng dari Cina (pis bolong) untuk
                          perlengkapan upacara yadnya umat Hindu dan Lingga
                          berupa barong landung pada sejumlah pura.
                        </p>
                      </Collapse>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* akhir sejarah section */}

      <FooterComponent />
    </div>
  );
};

export default MainPage;
