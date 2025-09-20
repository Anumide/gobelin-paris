import { FC, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { VideoWrapper, VideoContainer, Video } from "./VideoComp"


const AchievementSection = styled.section`
  height: 100%;
  background-color: #286dff;
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
`

const AchivementContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2em;
  padding: 2.5em 2em;
  justify-content: center;
  z-index: 1;
  @media screen and (min-width: 998px) {
    padding: 2.5em 4em;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

const AchievementItem = styled.div`
  margin-bottom: 1.5em;
  &:last-child {
    margin-bottom: 0;
  }
  & p:first-child {
    font-size: 4rem;
    font-weight: 600;
    color: #9DE7FF;
    @media screen and (min-width: 1200px) {
      font-size: 4.5rem;
    }
  }
  & p:last-child {
    font-size: 1rem;
    font-weight: 400;
    color: #fff;
  }
`

const AchievementRightColumn = styled.div`
  text-align: left;
  @media screen and (min-width: 998px) {
    text-align: right;
  }
`

const ModifiedVideWrapper = styled(VideoWrapper)`
  z-index: 0;
`

const ModifiedVideo = styled(Video)`
  @media screen and (min-width: 998px) {
    object-fit: contain;
  }
`

type AchievementItemProps = {
  number: string;
  description: string;
}

const leftColumnData = [
  { number: '84,000+', description: 'Graduates Trained' },
  { number: '38+', description: 'Courses Offered' },
  { number: '512+', description: 'Industry Leaders Made' }
]

const rightColumnData = [
  { number: '60+', description: 'Years of Experience' },
  { number: '75+', description: 'Awards for Best School of Animation' },
  { number: '100+', description: 'Nationalities Represented' }
]

gsap.registerPlugin(SplitText, ScrollTrigger)


const AchievementItemComponent: FC<AchievementItemProps> = ({ number, description }) => (
  <AchievementItem className="achivement_item">
    <p>{number}</p>
    <p>{description}</p>
  </AchievementItem>
)

const Achievement: FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  useGSAP(() => {
    const scrollTrigger = {
      trigger: sectionRef.current,
      start: '15px 60%',
      // pin: sectionRef.current,
      // pinSpacing: false
    }
    const commonAnimation = {
      scrollTrigger,
      y: 70,
      autoAlpha: 0,
      stagger: 0.05,
      ease: 'power1',
      duration: 0.9,
    }
  // Animation for achivement items
  gsap.from('.achivement_item_parent_1 div, .achivement_item_parent_1 p', commonAnimation)
  gsap.from('.achivement_item_parent_2 div, .achivement_item_parent_2 p', commonAnimation)
  // Animation for background video
  gsap.from('.video_element', {
    scrollTrigger,
    scale: 1.3,
    autoAlpha: 0,
    duration: 1,
    ease: 'power1',
  })
})
  return (
    <AchievementSection ref={sectionRef}>
      <div style={{position: 'relative', display: 'grid', gridTemplateColumns: '1fr'}}>
        <AchivementContainer>
          <div className="achivement_item_parent_1">
            {leftColumnData.map((item, index) => (
              <AchievementItemComponent 
                key={index}
                number={item.number}
                description={item.description}
              />
            ))}
          </div>
          <AchievementRightColumn className="achivement_item_parent_2">
            {rightColumnData.map((item, index) => (
              <AchievementItemComponent 
                key={index}
                number={item.number}
                description={item.description}
              />
            ))}
          </AchievementRightColumn>
        </AchivementContainer>
        <ModifiedVideWrapper>
          <VideoContainer>
            <ModifiedVideo className="video_element" muted autoPlay loop preload="auto">
              <source src="https://res.cloudinary.com/dhgg7l2bw/video/upload/v1757713939/Gobelins_Blue_tuddf4.webm" />
            </ModifiedVideo>
          </VideoContainer>
        </ModifiedVideWrapper>
      </div>
    </AchievementSection>
  );
}

export default Achievement