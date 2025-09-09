import { FC, useRef } from "react";
import styled from "styled-components";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./Button";
import ChevronDownIcon from "../assets/icons/ChevronDown"
import BulidingCap from "../assets/images/building-cap";


const AboutSection = styled.section`
  height: 100%;
  padding: 1rem;
  margin: 1em 0;
`

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1em 0;
  @media (min-width: 768px) {
    grid-template-columns: 0.75fr 1fr;
  }
`

const AboutHeading = styled.h2`
  font-size: 2.5rem 
`

const AboutText = styled.p`
  font-weight: 400;
`

const ButtonTransparentBg = styled(Button)`
  background-color: transparent;
  border: 1px solid #D9DBDD;
  margin-top: 1rem;
  @media (min-width: 768px) {
    width: auto;
  }
`

const ChevronRightIcon = styled(ChevronDownIcon)`
  transform: rotate(-90deg);
`

const BuildingCapParent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3em;
  // @media (max-width: 768px) {
  //   overflow-x: hidden;
  //   overflow-y: auto;
  // }
`

gsap.registerPlugin(SplitText, ScrollTrigger)
const About: FC = () => {
  const aboutContainerRef = useRef<HTMLDivElement>(null)
  const aboutTextContent = useRef<HTMLParagraphElement>(null)
  const aboutButtonRef = useRef<HTMLButtonElement>(null)
  const aboutHeadingRef = useRef<HTMLHeadingElement>(null)
  const aboutBuildingCapParentRef = useRef<HTMLDivElement>(null)
  const aboutBuildingCapRef = useRef<SVGSVGElement>(null)
  const mm = gsap.matchMedia()

  useGSAP(() => {
    const aboutHeadingSplit = SplitText.create(aboutHeadingRef.current, {
      type: "lines, words, chars",
      mask: 'lines',
    })
    gsap.from(aboutHeadingSplit.lines, {
      scrollTrigger: {
        trigger: aboutContainerRef.current,
        start: '15px 90%',
      },
      autoAlpha: 0,
      y: 100,
      stagger: 0.1,
      ease: 'power1',
      duration: 0.7,
    })
    gsap.from(aboutHeadingSplit.chars, {
      scrollTrigger: {
        trigger: aboutContainerRef.current,
        start: '15px 90%',
      },
      stagger: 0.1,
      y: 100,
      autoAlpha: 0,
      ease: 'power1',
      duration: 0.7
    })
    const aboutContentSplit = SplitText.create(aboutTextContent.current, {
      type: 'lines',
      mask: 'lines',
    })
    gsap.from(aboutContentSplit.lines, {
      scrollTrigger: {
        trigger: aboutContainerRef.current,
        start: '15px 90%',
      },
      ease: 'power1',
      duration: 0.7,
      y: 50,
      autoAlpha: 0,
      stagger: 0.05
    })
    gsap.from(aboutButtonRef.current, {
      scrollTrigger: {
        trigger: aboutContainerRef.current,
        start: '15px 90%',
      },
      ease: 'power1',
      duration: 0.9,
      y: 100,
      autoAlpha: 0,
    })

    const tl = gsap.timeline({scrollTrigger: { trigger: aboutBuildingCapParentRef.current, start: '20px 90%' }});
    mm.add({
      isMobile: '(max-width: 998px)',
      isDesktop: '(min-width: 999px)',
    }, (context) => {
      const { isDesktop } = context.conditions
      tl.fromTo(aboutBuildingCapRef.current, {
        ease: 'power1',
        y: 100,
        scale: isDesktop ? 1.4 : 1.8,
        autoAlpha: 0,
      }, {
        scale: isDesktop ? 1.1 : 1.5,
        autoAlpha: 1, 
        y: isDesktop ? '4vh' : '9vh', 
        duration: 0.9,
        transformOrigin: 'bottom center',
      }).fromTo(aboutBuildingCapRef.current, { scale: isDesktop ? 1.14 : 1.6, y: isDesktop ? '5vh' : '13vh' }, {
        scale: isDesktop ? 1 : 1.3,
        y: isDesktop ? '2vh' : '3vh',
        duration: 0.9,
        ease: 'power1',
        scrollTrigger: {
          scrub: true
        }
      })
    })
  })

  return (
    <AboutSection>
      <AboutContainer ref={aboutContainerRef}>
        <AboutHeading ref={aboutHeadingRef}>About Us</AboutHeading>
        <div>
          <AboutText ref={aboutTextContent}>At Gobelins, we pride ourselves on our diverse range of programs, including character animation, 3D animation, & visual effects. Each course is designed to foster creativity & technical skills, allowing students to explore their unique artistic voices while mastering the tools of the trade. Our faculty consists of industry professionals who bring their real-world experience into the classroom, providing invaluable insights & mentorship.</AboutText>
          <ButtonTransparentBg ref={aboutButtonRef}>
              Read About Us
              <ChevronRightIcon />
            </ButtonTransparentBg>
        </div>
      </AboutContainer>
      <BuildingCapParent ref={aboutBuildingCapParentRef}>
        <BulidingCap ref={aboutBuildingCapRef} />
      </BuildingCapParent>

    </AboutSection>
  )
}

export default About