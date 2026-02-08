import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./SalesInfo.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";
// import page1 from "../../assets/SalesInfo/SubscriptionGuide/page1.jpg";

import Ready from "../../components/Ready/Ready";



const ComplexGuide1 = () => {
  const menuContents = [
    // { title: "청약방법안내", url: "/SalesInfo/SubscriptionGuide" },
    { title: "자금조달계획안내문", url: "/SalesInfo/guide" },
    { title: "모집공고안내", url: "/SalesInfo/announcement" },
    { title: "인지세납부안내", url: "/SalesInfo/stampTax" },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false); // 이미지 로드 상태
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 이미지 로드 후 애니메이션 실행
  const handleImageLoad = () => {
    setIsImage2Loaded(true);
  };

  return (
    <div className={styles.container}>
    <Helmet>
      <title>시흥 거모지구 대방 엘리움 더 루체 - 청약안내</title>
      <meta
        name="description"
        content="시흥 거모지구 대방 엘리움 더 루체 청약안내를 한눈에 확인하세요. 특별공급·1·2순위 청약 일정, 자격요건, 필요서류와 인터넷 청약 절차를 안내합니다."
      />
      <link rel="canonical" href="https://www.dwbsongs.com/SalesInfo/SubscriptionGuide" />
      <meta name="robots" content="index,follow" />
    </Helmet>

    <Header isChanged={isScroll} />
    <FixIcon />

    <Bener title="청약안내" />

    <MenuBar contents={menuContents} />

    {/* SEO 최적화 */}
    <h1 className={styles.screenReaderOnly}>
      시흥 거모지구 대방 엘리움 더 루체 - 청약안내
    </h1>
    <p className={styles.screenReaderOnly}>
      시흥 거모지구 대방 엘리움 더 루체의 인터넷 청약 절차를 안내합니다.
      특별공급 및 1·2순위 접수 전 자격요건과 필요서류를 확인하고,
      단계별 청약 절차를 따라 정확하고 편리하게 신청하세요.
    </p>

    <div className={styles.textBox}>
      <div>인터넷 청약 절차를 확인하세요</div>
      <div>시흥 거모지구 대방 엘리움 더 루체, 소중한 기회를 놓치지 마세요</div>
    </div>


      {/* 이미지에 애니메이션 효과 추가 */}
      {/* <img
        className={`${styles.image2} ${isImage2Loaded ? styles.showImage2 : ''}`}
        src={page1}
        alt="시흥 거모지구 대방 엘리움 더 루체청약제도 변경안내 이미지1"
        onLoad={handleImageLoad}  // 이미지 로드 후 애니메이션 실행
      /> */}


      <Ready/>




      <div className={styles.commonBox2}>
        <div className={styles.notice}>
          ※ 상기 내용은 편집과정상 오류가 있을 수 있으니 반드시 입주자모집공고를
          확인하시기 바랍니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ComplexGuide1;
