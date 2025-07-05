import { FC, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import styled from "styled-components";
import Button from "../Button";
import { VideoWrapper, VideoContainer, Video } from "../VideoComp"
import PlayIcon from "../../assets/icons/PlayIcon";

const HeroWrapper = styled.div`
  height: calc(100vh - 85px);
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: end;
  border-radius: 24px;
  margin-block: 1rem;
  min-height: 690px;
  max-height: 785px;
  background-color: rgba(0, 0, 0, 0.5);
`

const HeroContent = styled.div`
  width: 100%;
  padding: 2rem;
  color: #fff;
`

const HeroContentWelcome = styled.p`
  text-transform: uppercase;
  font-family: "Geist Mono", monospace;
`

const HeroContentHeading = styled.h1`
  & div {
    font-size: 4rem;
    font-weight: 600;
    line-height: 0.85;
    margin-block: 0.25rem;
    @media (min-width: 768px) {
      font-size: 4.75rem;
    }
  }
  @media (min-width: 768px) {
    font-size: 4.75rem;
    width: 75%;
  }
  @media (min-width: 1280px) {
    width: 50%;
  }
  @media (min-width: 1500px) {
    width: 40%;
  }
`

const ArtisticTextWrapper = styled.div`
  display: inline;
  & div {
    font-size: 4.5rem;
     @media (min-width: 768px) {
      font-size: 6rem;
    }
  }
  & span, & div {
    font-family: 'Cheltenham';
    font-weight: bold;
  }
`

const Letter = styled.span<{$color: string}>`
  color: ${props => props.$color};
`

const HeroContentText = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  margin-block: 0.5rem;
  @media (min-width: 768px) {
    font-size: 1.375rem;
    width: 80vw;
  }
    @media (min-width: 1280px) {
    width: 49vw;
  }
`

const HeroContentButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-block: 1rem;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const ButtonWhiteBg = styled(Button)`
  background-color: #fff;
  color: #313437;
  width: 100%;
  @media (min-width: 768px) {
    width: auto;
  }
`

const ButtonTransparentBg = styled(Button)`
  background-color: transparent;
  color: #fff;
  width: 100%;
  border: 1px solid #fff;
  @media (min-width: 768px) {
    width: auto;
  }
`

const colors = ['#6148EF', '#EF48A4', '#48EFE4', '#D3EF48', '#EF4848', '#EF7D48', '#4875EF']

const ArtisticText: FC<{text: string, colors: string[]}> = ({text, colors}) => {
  return (
    text.split('').map((char, index) => <Letter key={index} $color={colors[index]}>{char}</Letter>)
  )
}

gsap.registerPlugin(useGSAP, SplitText);

const GobelinHeroBanner = () => {
  const heroHeadingText = useRef<HTMLHeadingElement>(null);
  const heroWelcomeContent = useRef<HTMLParagraphElement>(null);
  const heroContentText = useRef<HTMLParagraphElement>(null);
  const heroContentButtons = useRef<HTMLDivElement>(null)!;
  useGSAP(() => {
    document.fonts.ready.then(() => {
      const heroWelcomeSplit = SplitText.create(heroWelcomeContent.current, {type: "chars"})
      gsap.from(heroWelcomeSplit.chars, {
        x: 150,
        scale: 1.5,
        autoAlpha: 0,
        duration: 0.9, 
        ease: "power1",
        stagger: 0.05
      })
      const heroHeadingSplit = SplitText.create(heroHeadingText.current, {
        type: "lines, words, chars",
        mask: 'lines',
      })
      gsap.from(heroHeadingSplit.lines, {
        autoAlpha: 0,
        y: 100,
        stagger: 0.1,
        ease: 'power1',
        duration: 0.5,
      })
      gsap.from(heroHeadingSplit.chars, {
        stagger: 0.04,
        y: 100,
        autoAlpha: 0,
        ease: 'power1',
        duration: 0.7
      })
      const heroContentSplit = SplitText.create(heroContentText.current, {
        type: 'lines',
        mask: 'lines',
      })
      gsap.from(heroContentSplit.lines, {
        ease: 'power1',
        duration: 0.9,
        y: 50,
        autoAlpha: 0,
        stagger: {
          from: 'end',
          each: 0.4,
        },
      })
    })
    gsap.from('.hero-buttons button', {
      x: 100,
      scale: 1.2,
      autoAlpha: 0,
      duration: 1, 
      ease: "power1",
      stagger: 0.3
    })
  })

  return (
    <>
      <HeroWrapper>
        <HeroContent>
          <HeroContentWelcome ref={heroWelcomeContent}>Welcome to gobelins paris</HeroContentWelcome>
          <HeroContentHeading ref={heroHeadingText}>Where the greatest <ArtisticTextWrapper><ArtisticText text='artists' colors={colors} /></ArtisticTextWrapper> are made</HeroContentHeading>
          <HeroContentText ref={heroContentText}>Floor die open follow encourage bake ui ocean points every. Must can vendor comms streamline. Illustration focus third flesh muted. Submit wanted view goto give eow. Six effects unit shelf-ware manage going.</HeroContentText>
          <HeroContentButtons className="hero-buttons" ref={heroContentButtons}>
            <ButtonWhiteBg>Start your GOBELINS Journey</ButtonWhiteBg>
            <ButtonTransparentBg>
              <PlayIcon />
              Watch Trailer
            </ButtonTransparentBg>
          </HeroContentButtons>
        </HeroContent>
        <VideoWrapper>
        <VideoContainer>
          <Video muted autoPlay loop preload="auto">
            <source src="https://res.cloudinary.com/dhgg7l2bw/video/upload/v1745250321/gobelin-paris/Gobelins_Hero_VIdeo_mnugks.webm" />
          </Video>
        </VideoContainer>
      </VideoWrapper>
      </HeroWrapper>
    </>
  )
}

export default GobelinHeroBanner