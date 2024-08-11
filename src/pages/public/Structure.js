import { React, useState } from "react";
import NavbarComponent from "../../layouts/NavbarComponent";
import FooterComponent from "../../layouts/FooterComponent";
import illust_structure from "../../assets/illust_structure.png";
import denah from "../../assets/denah.png";
import denah1 from "../../assets/denah_1.png";
import denah2 from "../../assets/denah_2.png";
import denah3 from "../../assets/denah_3.png";
import { Collapse } from "react-bootstrap";

const Structure = () => {
  const [collapse1, setCollapse1] = useState(false);
  const [collapse2, setCollapse2] = useState(false);
  const [collapse3, setCollapse3] = useState(false);

  return (
    <div className="structure_page">
      <NavbarComponent />

      {/* header section */}
      <section id="header_structure" className="header_structure">
        <div className="row container rounded section-title justify-content-center mx-auto my-5">
          {/* <div className="col-6 mt-5 "> */}
          <h1 className="mt-4" style={{ color: "#A20404", fontSize: "36px" }}>
            Struktur Pura Dalem Balingkang
          </h1>
          <p style={{ paddingLeft: 120, paddingRight: 120 }}>
            Berdasarkan konsepnya, Pura Dalem Balingkang menerapkan konsep Tri
            Mandala seperti kebanyakan pura-pura di Bali. Yang membagi ruang
            atau mandala menjadi tiga bagian sebagai reflika dari konsep Tri
            Bhuwana yaitu Bhur Loka atau Nista Mandala, Bwah Loka atau Madya
            Mandala, dan Swah Loka atau Utama Mandala. Sehingga sering dikatakan
            bahwa denah pura adalah perlambang alam semesta atau Bhuwana Agung.
            Akibatnya penempatan bangunan dalam pura disesuaikan dengan
            pembagian tersebut di atas, seperti bangunan-bangunan suci di
            tempatkan di Jeroan dan bangunan penunjang di tempatkan di halaman
            pertama atau Jabaan.
          </p>
          <img
            src={denah}
            alt="denah"
            className="mt-4"
            style={{ width: 600 }}
          />
          <hr className="mx-5" />
          <p className="text-center">Gambar Denah Pura Dalem Balingkang</p>
          {/* </div>
          <div className="col-6"> */}
          {/* </div> */}
        </div>
      </section>
      {/*akhir header section */}

      {/* tri mandala section */}
      <section
        id="trimandala"
        className="d-flex trimandala section-bg py-5 align-items-center"
        style={{ background: "#A20404", minHeight: "100vh" }}
      >
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div
              className="col-lg-6 align-items-stretch order-1 order-lg-2 img"
              style={{
                backgroundImage: `url(${
                  collapse1
                    ? denah1
                    : collapse2
                    ? denah2
                    : collapse3
                    ? denah3
                    : illust_structure
                })`,
              }}
              //   style='background-image: url("assets/img/why-us.png");'
              data-aos="zoom-in"
              data-aos-delay="150"
            />
            <div className="col-lg-6  order-2 order-lg-1">
              <div className="content">
                <h3>
                  Struktur Pura Dalem Balingkang
                  <br></br>
                  <strong>Tri Mandala</strong>
                </h3>
                <p>
                  Terdapat tiga bagian sebagai reflika dari konsep Tri Bhuwana
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
                      <span>01</span> Utama Mandala
                      <i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </a>
                    <div
                      id="accordion-list-1 collapse"
                      className="collapse show"
                    >
                      <Collapse in={collapse1}>
                        <div id="collapseId1">
                          <ol className="pt-4">
                            <li style={{ padding: 0 }}>
                              Tepasana (Sthana Bhatari Prethiwi)
                            </li>
                            <li style={{ padding: 0 }}>
                              Meru tumpang 11 (Sthana Sang Hyang Pasupati)
                            </li>
                            <li style={{ padding: 0 }}>
                              Meru tumpang 9 (Sthana Dewata Nawasanga)
                            </li>
                            <li style={{ padding: 0 }}>
                              Palinggih Pajenangan Bhatara Dalem Balingkang
                            </li>
                            <li style={{ padding: 0 }}>
                              Meru tumpang 7 (Sthana Sang Hyang Sapta Rsi)s
                            </li>
                            <li style={{ padding: 0 }}>
                              Meru tumpang 5 (Sthana Bhatara Wisnu)
                            </li>
                            <li style={{ padding: 0 }}>
                              Meru tumpang 3 (Sthana Bhatari Tri Purusa)
                            </li>
                            <li style={{ padding: 0 }}>
                              Meru tumpang 2 (Sthana Bhatari Sri dan Bhatari
                              Sedana)
                            </li>
                            <li style={{ padding: 0 }}>Bale Tajuk</li>
                            <li style={{ padding: 0 }}>Bale Tajuk</li>
                            <li style={{ padding: 0 }}>Bale Tajuk</li>
                            <li style={{ padding: 0 }}>Bale Tajuk</li>
                            <li style={{ padding: 0 }}>
                              Sanggar Agung rong 3 (sthana Śiwa, Sadaśiwa,
                              Paramaśiwa)
                            </li>
                            <li style={{ padding: 0 }}>Bale Tajuk</li>
                            <li style={{ padding: 0 }}>Bale Tajuk</li>
                            <li style={{ padding: 0 }}>Bale Tajuk</li>
                            <li style={{ padding: 0 }}>Bale Tajuk</li>
                            <li style={{ padding: 0 }}>
                              Sanggar Agung rong 3 (sthana Śiwa, Sadaśiwa,
                              Paramaśiwa)
                            </li>
                            <li style={{ padding: 0 }}>
                              Manjangan Sakaluwang sthana Panca Rsi
                            </li>
                            <li style={{ padding: 0 }}>
                              Bale Mundar-Mandir linggih Pacalang
                            </li>
                            <li style={{ padding: 0 }}>
                              Bale Mundar-Mandir linggih Pacalang
                            </li>
                            <li style={{ padding: 0 }}>Bale Slaka saka 16</li>
                            <li style={{ padding: 0 }}>Bale Mas saka 32</li>
                            <li style={{ padding: 0 }}>
                              Lumbung (sthana Bhatari Sri)
                            </li>
                            <li style={{ padding: 0 }}>
                              Gedong Panghulun Bale Agung
                            </li>
                            <li style={{ padding: 0 }}>Bale Agung saka 20</li>
                            <li style={{ padding: 0 }}>Bale Agung saka 24</li>
                            <li style={{ padding: 0 }}>Bale Agung saka 12</li>
                            <li style={{ padding: 0 }}>Bale Agung saka 16</li>
                            <li style={{ padding: 0 }}>a-b Candi Bentar</li>
                          </ol>
                        </div>
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
                      <span>02</span> Madya Mandala
                      <i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </a>
                    <div
                      id="accordion-list-1 collapse"
                      className="collapse show"
                    >
                      <Collapse in={collapse2}>
                        <div id="collapseId1">
                          <ol>
                            <li style={{ padding: 0 }}>
                              Pasimpangan Dalem Tarukan, bangunan yang ada
                              meliputi :
                              <ol>
                                <ul>Gedong Taksu</ul>
                                <ul>Piasan</ul>
                              </ol>
                            </li>
                            <li style={{ padding: 0 }}>
                              Palinggih Dukuh Sakti, bangunan yang ada meliputi:
                              <ol>
                                <ul>Palinggih Dukuh Sakti</ul>
                                <ul>Piasan</ul>
                              </ol>
                            </li>
                            <li style={{ padding: 0 }}>Gedong Simpen</li>
                            <li style={{ padding: 0 }}>
                              Jro Kawanan, bangunan yang meliputi :
                              <ol>
                                <ul>Kemulan rong 3 (Sthana Hyang Tri Murti)</ul>
                                <ul>Padmasari</ul>
                                <ul>
                                  Meru tumpang 2 (Sthana Bhatara Sri-Sedana)
                                </ul>
                                <ul>Gedong Pajenengan</ul>
                                <ul>Bale Piasan</ul>
                                <ul>Pemaruman Agung</ul>
                                <ul>Bale Pegat atau Bale Pangguangan</ul>
                                <ul>Bale Pegat atau Bale Pangguangan</ul>
                                <ul>Bale Pelancang</ul>
                                <ul>Bale Pelancang</ul>
                                <ul>Bale Paebatan</ul>
                                <ul>Bale Perantenan Suci</ul>
                                <ul>Bale Gong</ul>
                                <ul>Bale Prajuru</ul>
                                <ul>Bale Genah Punia</ul>
                                <ul>Bale Pawedan</ul>
                                <ul>Bale Pesantian</ul>
                                <ul>Bale Pelancang</ul>
                                <ul>Bale Gong Desa Petak</ul>
                                <ul>Bale Gong Desa Pinggan</ul>
                                <ul>Bale Gong Desa Sambirenteng</ul>
                                <ul>Palinggih Ratu Ayu Mas Subandar</ul>
                                <ul>Bale Kulkul</ul>
                                <ul>a-b Çang Apit atau pintu masukl</ul>
                                <ul>Candi Bentar</ul>
                              </ol>
                            </li>
                            <li style={{ padding: 0 }}>
                              Bujangga, bangunan yang ada meliputi :
                              <ol>
                                <ul>Padmasana</ul>
                                <ul>Meru tumpang (Pajenengan Bujangga)</ul>
                                <ul>Bale Piasan</ul>
                              </ol>
                            </li>
                            <li style={{ padding: 0 }}>
                              Jro Kanginan, bangunan yang ada meliputi :
                              <ol>
                                <ul>Meru tumpang 3 sthana Tri Murti</ul>
                                <ul>Padmasari</ul>
                                <ul>Gedong Sari</ul>
                                <ul>Palinggih Panca Resi</ul>
                                <ul>Bale Piasan</ul>
                                <ul>Bale Piasan</ul>
                                <ul>Panggungan</ul>
                              </ol>
                            </li>
                          </ol>
                        </div>
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
                      <span>03</span> Nista Mandala
                      <i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </a>
                    <div
                      id="accordion-list-1 collapse"
                      className="collapse show"
                    >
                      <Collapse in={collapse3}>
                        <div id="collapseId1">
                          <ol className="pt-4">
                            <ol>
                              <ul>a - b Palinggih Apit Lawang</ul>
                              <ul>a - b Palinggih Pasesanjan</ul>
                              <ul>Pohon Beringin dan Palinggih Bingin 1</ul>
                              <ul>Pohon Beringin dan Palinggih Bingin 2</ul>
                            </ol>
                            <li style={{ padding: 0 }}>
                              Pura Tangguntiti, bangunan yang ada meliputi :
                              <ol>
                                <ul>Palinggih Ratu Mas Malanting</ul>
                                <ul>Palinggih Ratu Ngurah Tangguntiti</ul>
                                <ul>Bale Piasan</ul>
                                <ul>Panggungan</ul>
                                <ul>Palinggih Ratu Gde Penyarikan</ul>
                                <ul>Bale Gong</ul>
                              </ol>
                            </li>
                            <li style={{ padding: 0 }}>Pura Beji</li>
                            <li style={{ padding: 0 }}>
                              Palinggih Sang Hyang Haji Saraswasti, bangunan
                              yang ada meliputi :
                              <ol>
                                <ul>Padmasari</ul>
                                <ul>Bebaturan</ul>
                                <ul>Gedong</ul>
                              </ol>
                            </li>
                          </ol>
                        </div>
                      </Collapse>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* akhir tri mandala section */}

      {/* piodalan section */}
      <section id="piodalan_structure" className="piodalan_structure">
        <div className=" container rounded section-title my-5 pt-4 text-start px-5">
          <h1
            style={{ color: "#A20404", fontSize: "36px" }}
            className="text-center"
          >
            PIODALAN DI PURA DALEM BALINGKANG
          </h1>
          <p>
            Piodalan adalah suatu perayaan di pura atau kahyangan yang
            dilaksanakan oleh para pangempon atau panyungsung pura tersebut.
            Piodalan pada suatu pura biasanya dilaksanakan setiap 6 bulan sekali
            (bedasarkan pawukon atau wuku) dan setiap 1 tahun sekali (bedasarkan
            sasih). Piodalan di Pura Dalem Balingkang, Desa Pinggan, Kecamatan
            Kintamani, Kabupaten Bangli Bangli dilaksanakan setiap satu tahun
            sekali berdasarkan sasih yaitu pada hari Purnama Kalima (purnama
            bulan ke-5 dalam perhitungan kalender Bali) jatuh antara bulan
            Oktober sampai November. Pada saat piodalan di Pura Dalem Balingkang
            umat Hindu di seluruh pulau Bali maupun di luar pulau Bali
            berduyun-duyun melaksanakan persembahyangan atau tirtayatra untuk
            memohon kesejahteraan dan kelancaran setiap usaha yang digelutinya.
            Secara garis besar prosesi piodalan di Pura Dalem Balingkang yaitu :
          </p>

          <p>
            <strong>1. Nanjeb Dana (Matur Piuning)</strong>
          </p>
          <p>
            Nanjeb dana atau matur piuning dilakukan pada hari Purnama Kapat
            atau sebulan sebelum piodalan di Pura Dalem Balingkang. Tujuan dari
            Nanjeb Dana yaitu memohon kehadapan Ida Sang Hyang Widhi Wasa (Ida
            Bhatara-Bhatari di Pura Dalem Balingkang). Agar Beliau berkenan
            untuk melimpahkan segala waranugraha-Nya kepada umat sedharma,
            khususnya pangempon Pura Dalem Balingkang dalam pelaksanakan
            piodalan di Pura Dalem Balingkang yang akan berlangsung. Nanjeb Dana
            ditandai dengan menancapkan suwiran dan ngunggahang tapakan linggih
            sebagai tanda akan di laksanakannya piodalan. Nanjeb Dana sering
            pula di sebut ngeker desa oleh masyarakat pangempon Pura Dalem
            Balingkang, yaitu Desa Pakraman Pinggan.
          </p>

          <p>
            <strong>2. Ngamedalang Ida Bhatara</strong>
          </p>
          <p>
            Ngemedalang Ida Bhatara di Pura Dalem Balingkang dilakukan pada saat
            malam hari yaitu tepat jam 12 malam (tengahinglatri). Ngemedalang
            Ida Bhatara di Pura Dalem Balingkang tidak dilaksanakan apabila
            bertepatan dengan rahina Pasah (:Tri Wara), Saniscara (:Sabtu) dan
            Soma (:Senin), hal ini berdasarkan Desa Kala Patra yang berlaku di
            Desa Pakraman Pinggan menganggap bahwa hari tersebut merupah hari
            mati (hari tidak baik untuk melaksanakan upacara keagamaan khususnya
            Dewa Yadnya). Hal tersebut yang mempengaruhi lama tidaknya
            pelaksanaan piodalan di Pura Dalem Balingkang (nyejer). Pada saat
            piodalan semua arca pralingga (Ida Bhatara) disthanakan di Pemaruman
            Agung yang berada di Madhya Mandala, kecuali Ida Bhatara di
            palinggih Saraswati, Tanggun Titi, Ratu Ayu Mas Subandar, Jro
            Kanginan, dan Jro Kawanan.
          </p>

          <p>
            <strong>3. Mapeningan (Makiyis)</strong>
          </p>
          <p>
            Mapeningan atau Makiyis biasanya dilalakukan di pura beji atau
            sumber-sumber mata air (patirtan) yang dipercaya memiliki nilai
            kesucian yang tinggi. Di samping itu juga makiyis biasanya dilakukan
            pada pura yang mempunyai hubungan historis dengan Pura Dalem
            Balingkang. Pelaksanaan makiyis di Pura Dalem Balingkang tergantung
            pada situasi dan kondisi berdasarkan hasil peparuman prajuru atau
            rapat prajuru dan panitia Pura Dalem Balingkang. Secara umum makiyis
            bertujuan untuk menyucikan arca pralingga Ida Bhatara dalam hal ini
            arca pralingga di Pura Dalem Balingkang.
          </p>

          <p>
            <strong>4. Mepada dan Katur Bhakti Piodalan (Puja Wali)</strong>
          </p>
          <p>
            Katuran Bhakti Piodalan merupakan puncak dari upacara piodalan di
            Pura Dalem Balingkang, yaitu pada Purnama Kalima yang dilaksanakan
            pada malam hari. Sebelum melaksanakan upacara bhakti piodalan
            diawali dengan melaksanakan upacara Mepada Wewalungan yang bertujuan
            untuk menyucikan hewan kurban (Kerbau, Kambing, Babi, Bebek, dan
            Ayam) dan semua sarana upakara lainnya. Sealain bertujuan untuk
            menyucikan sarana upacara, mepada juga bertujuan untuk menyucikan
            Bhuwana Agung khususnya di areal Pura Dalem Balingkang. Upacara
            mepada dilaksanakan mengelilingi areal pura sebanyak tiga kali
            searah jarum jam (purwa daksina). Setelah selsai upacara mepada
            dilanjutkan dengan menyembelih hewan kurban (kerbau ; jro gde) oleh
            Jro Kubayan Kiwa Desa Sukawana sebagai lambang persembahan hewan
            kehadapan Ida Bhatara-Bhatari di Pura Dalem Balingkang.
          </p>

          <p>
            <strong>5. Katur Bakti Pengatep (Penganyar)</strong>
          </p>
          <p>
            Bhakti Penganyar ini dilaksanakan setiap hari yang ditandai dengan
            melakukan sembahyang bersama. Biasanya dilaksanakan pada sore atau
            malam hari, setelah pragina igel (tari sakral) oleh desa pengempon
            selsasi melaksanakan ayah-ayahan atau menari.
          </p>

          <p>
            <strong>6. Ida Bhatara Masineb (Ngeluhur)</strong>
          </p>
          <p>
            Setelah semua prosesi upacara di atas terlaksanakan, untuk
            mengakhiri prosesi piodalan di Pura Dalem Balingkang yaitu dengan
            Nyineb Ida Bhatara atau mensthanakan Ida Bhatara pada palinggih-Nya
            masing-masing. Nyineb Ida Bhatara juga tidak diperbolehkan pada saat
            rahina Pasah (:Tri Wara), Soma (:Senin), dan Saniscara (:Sabtu) yang
            dilaksanakan pada malam hari.
          </p>

          <p>
            <strong>7. Maprani</strong>
          </p>
          <p>
            Maprani merupakan upacara penutup dalam rangakaian prosesi piodalan
            di Pura Dalem Balingkang. Upacara ini dilaksanakan sehari setelah
            Ida Bhatara Masineb atau Ngaluhur. Adapun tujuan dari upacara ini
            yaitu untuk memohon maaf kehadapan Ida Sang Hyang Widhi Wasa (Ida
            Bhatara-Bhatari di Pura Dalem Balingkang) apabila selama pelaksanan
            prosesi piodalan ada suatu kesalahan, baik secara disengaja ataupun
            tidak disengaja serta untuk memohon waranugraha Ida Bhatara agar
            kehidupan masyarakat senantiasa tentram dan damai.
          </p>
        </div>
      </section>
      {/*akhir piodalan section */}

      {/* pangempon section */}
      <section
        id="pangempon_structure"
        className="pangempon_structure"
        style={{ background: "#A20404" }}
      >
        <div
          className=" container rounded section-title my-5 pt-4 text-start px-5"
          style={{ color: "#F8F9FA" }}
        >
          <h1
            style={{ color: "#F8F9FA", fontSize: "36px" }}
            className="text-center"
          >
            PANGEMPON DI PURA DALEM BALINGKANG
          </h1>
          <p>
            Pangempon dalam hal ini berarti sekelompok masyarakat baik itu
            organisasi banjar, atau desa adat yang mengurusi segala sesuatunya
            agar pura yang diemponnya dapat difungsikan dengan sebaik-baiknya
            oleh umat panyungsung. Artinya pangempon pura bukan berarti hanya
            warga pangempon saja yang boleh menggunakan pura tersebut sebagai
            sarana untuk menyelenggarakan kehidupan beragama Hindu. Begitu pula
            dengan Pura Dalem Balingkang sudah pasti ada yang bertanggungjawab
            atau mengurus (pangempon) segala sesuatu yang diperlukan untuk
            memelihara kesucian pura, sarana prasarana (upakara), dan
            menjalankan upacara piodalan setiap tahunnya. Pangempon Pura Dalem
            Balingkang adalah Desa Pakraman Pinggan, Kecamatan Kintamanai,
            Kabupaten Bangli. Di mana Desa Pakraman Pinggan mempunyai kewajiban
            untuk memelihara dan bertanggungjawab atas segala sesuatu yang
            diperlukan di Pura Dalem Balingkang, khususnya untuk menjaga
            kesucian dan melaksanakan piodalan di Pura Dalem Balingkang. Selain
            Desa Pakraman Pinggan sebagai pangempon uttama, juga ada Banua
            Pangemong yang ikut manyungsung Pura Dalem Balingkang. Adapun
            beberapa desa pakraman yang ikut mebanua, yaitu : Desa Pakraman
            Tembok, Desa Pakraman Gretek, Desa Pakraman Sambirenteng, Desa
            Pakraman Les-Penuktukan di Singaraja, serta Desa Pakraman Siakin di
            Bangli. Desa-desa pakraman tersebut memiliki kewajiban masing-masing
            pada saat piodalan di Pura Dalem Balingkang, yaitu mempersembahkan
            atos desa (hasil kebun yang dimiliki) berupa buah kelapa, garam,
            daun enau, dan lain-lainnya. Selain pangempon dan banua pangemong di
            atas ada juga desa panyucuk yang ikut serta dalam pelaksanaan
            upacara piodalan di Pura Dalem Balingkang. Adapun beberapa desa
            pakraman yang menjadi desa panyucuk di Pura Dalem Balingkang
            tersebar dibeberapa kabupaten di Bali, yaitu :
          </p>
          <par>
            <strong>A. Kabupaten Bangli :</strong>
          </par>
          <ol>
            <li>Desa Pakraman Songan</li>
            <li>Desa Pakraman Abang</li>
            <li>Desa Pakraman Buahan</li>
            <li>Desa Pakraman Abang Suter</li>
            <li>Desa Pakraman Kedisan</li>
          </ol>
          <par>
            <strong>B. Kabupaten Buleleng :</strong>
          </par>
          <ol>
            <li>Desa Sangsit</li>
            <li>Desa Sudaji</li>
            <li>Desa Kerobokan</li>
            <li>Desa Alas Harum</li>
            <li>Desa Bontihing</li>
          </ol>
          <par>
            <strong>C. Kabupaten Gianyar :</strong>
          </par>{" "}
          <ol>
            <li>Desa Petak</li>
            <li>Desa Benawah</li>
            <li>Desa Mantring</li>
            <li>Desa Panyembahan Harum</li>
            <li>Desa Madangan</li>
            <li>Desa Padpadan</li>
            <li>Desa Bon Nyuh</li>
            <li>Desa Payangan</li>
            <li>Desa Bayad</li>
            <li>Desa Meneca</li>
            <li>Desa Malingih</li>
          </ol>
          <par>
            <strong>D. Kabupaten Tabanan :</strong>
          </par>
          <ol>
            <li>Desa Sari Bwana</li>
            <li>Desa Sekar Gula</li>
          </ol>
        </div>
      </section>
      {/*akhir pangempon section */}

      <FooterComponent />
    </div>
  );
};

export default Structure;
