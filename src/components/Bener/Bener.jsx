import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="두산위브더제니스 청주 센트럴파크-benerimage"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
  if (
    text === '브랜드 소개' ||
    text === '홍보영상' ||
    text === '체크포인트' ||
    text === '계약서류안내' ||
    text === '시흥 거모지구 대방 엘리움'
  ) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          거모지구 중심 입지에서 누리는 신도시 프리미엄, 시흥 거모지구 대방 엘리움.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          수변공원과 단지 인접 녹지, 계획된 중심상업시설을 가까이 누리는 쾌적한 주거환경.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          대방산업개발의 주거 브랜드 ‘ELIUM’이 제안하는 프리미엄 라이프 스타일.
        </div>
      </>
    );
  } else if (
    text === '사업개요' ||
    text === '세대안내' ||
    text === '인테리어' ||
    text === '자금조달계획안내문' ||
    text === '모집공고안내' ||
    text === '인지세납부안내'||
    text === '분양일정'||
    text === '청약안내'
  ) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          시흥 거모 공공주택지구의 미래가치 위에 완성되는 프리미엄 주거단지.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          지하 2층~지상 최고 23층, 총 682세대로 구성된 대단지 스케일.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          전용 84㎡·122㎡ 중심의 4베이 평면과 특화 설계로 쾌적한 라이프스타일을 제안합니다.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          시흥 거모지구 대방 엘리움
        </div>
      </>
    );
  } else if (text === '입지환경' || text === '프리미엄') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          신안산선(예정)·4호선 접근과 광역도로망을 잇는 거모지구 핵심 입지.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          공원·학군·생활편의시설이 조성되는 계획도시 인프라로 여유로운 일상을 완성합니다.
        </div>
      </>
    );
  } else if (text === '단지안내') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          남향 위주 배치와 4베이 중심 설계로 채광과 통풍을 극대화한 단지 구성.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          피트니스·골프연습장·작은도서관·키즈존 등 다양한 커뮤니티 시설로 일상을 풍성하게.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          시흥 거모지구 대방 엘리움, 거모지구의 새로운 주거 기준을 제시합니다.
        </div>
      </>
    );
  }
};



  
