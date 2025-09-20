import { FC, useRef, ElementType } from "react"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { SplitText } from "gsap/SplitText"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import styled from "styled-components"
import Button from "./Button"
import ChevronDownIcon from "../assets/icons/ChevronDown"
import CheckIcon from "../assets/icons/CheckIcon"
import GlobeBg from "../assets/icons/GlobeBg"
import SchoolBg from "../assets/icons/SchoolBg"
import DegreeBg from "../assets/icons/DegreeBg"

type CardDetail = {
  icon?: ElementType;
  title: string;
  description: string;
  items: string[];
};

const ProgrammesSection = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1em 0;
  overflow: hidden;
  @media screen and (min-width: 998px) {
    padding: 3rem
  }
`
const ProgrammesHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 0.25em;
`
const DescriptionText = styled.p`
  font-weight: 400;
  color: #787F87;
  @media screen and (min-width: 998px) {
    max-width: 35%;
  }
`
const ButtonTransparentBg = styled(Button)`
  background-color: transparent;
  border: 1px solid #D9DBDD;
  margin-top: 1rem;
  width: 100%;
  transition: all 350ms;
`
const ChevronRightIcon = styled(ChevronDownIcon)`
  transform: rotate(-90deg);
`
const ProgrammeCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1em;
  margin-block: 2em;
  @media screen and (min-width: 998px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
const IconCheck = styled(CheckIcon)`
  color: black;
  min-width: 16px;
  max-width: 16px;
  height: 16px;
`
const Card = styled.div`
  border: 1px solid #E4E5E7;
    border-radius: 32px;
    background: #fff;
    padding: 1em;
    height: 500px;
    transition: all 450ms;
    display: flex;
    flex-direction: column;

  &:hover {
    background: radial-gradient(172.88% 134.04% at -15.97% -16.84%, #313437 22.03%, #2B2D30 38.23%, #18191B 75.59%);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    > p {
      color: #fff;
    }
    svg {
      color: #fff;
    }
    ${ButtonTransparentBg} {
      background-color: white;
      color: #000;
    }
  }
`
const CardItemsWrapper = styled.div`
  margin-block: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`
const CardItems = styled.div`
  color: #787F87;
  & > div {
    margin-bottom: 0.5em;
  }
  & > div:last-child {
    margin-bottom: 0;
  }
`
const CardIcon = styled.div`
  & svg { 
    width: 52px;
    margin-bottom: 0.5em;
  }
`
const cardDetails: CardDetail[]  = [
  {
    icon: GlobeBg,
    title: 'Online Course',
    description: 'Floor die open follow encourage bake ui ocean points every. Must can vendor comms streamline.',
    items: ['Animation Training Programme', 'Professional short courses in Animation']
  },
  {
    icon: DegreeBg,
    title: 'Degree Programmes',
    description: 'Floor die open follow encourage bake ui ocean points every. Must can vendor comms streamline.',
    items: [
      'Animation Training Programme',
      'Bachelor in Animation',
      'Bachelor 3D Character Animation',
      'Master in Animation',
      '3D Character Animator',
      'Master in Advanced Game Creation and Real-Time Applications'
    ]
  },
  {
    icon: SchoolBg,
    title: 'Summer School',
    description: 'Floor die open follow encourage bake ui ocean points every. Must can vendor comms streamline.',
    items: [
      'Summer School in Real-Time Animation with Unreal Engine',
      'Summer School in Character Animation',
      'Summer School in Character Animation - Online session',
      'Summer School in Visual Storytelling'
    ]
  }
]

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger)

const Programmes: FC = () => {
  const programmesHeading = useRef<HTMLHeadingElement>(null)
  const descriptionText = useRef<HTMLParagraphElement>(null)
  const programmCardWrapper = useRef<HTMLDivElement>(null)

   const scrollTrigger = {
    trigger: '.programmees_section',
    start: 'top 80%'
  }

  useGSAP(() => {
    const programmesHeadingSplit = SplitText.create(programmesHeading.current, {
      type: "lines, words, chars",
      mask: 'lines'
    })
    gsap.from(programmesHeadingSplit.lines, {
      scrollTrigger,
      autoAlpha: 0,
      y: 100,
      stagger: 0.1,
      ease: 'power1',
      duration: 0.7,
    })
    gsap.from(programmesHeadingSplit.chars, {
      scrollTrigger,
      stagger: 0.05,
      y: 50,
      autoAlpha: 0,
      ease: 'power1',
      duration: 0.7
    })
    const aboutContentSplit = SplitText.create(descriptionText.current, {
      type: 'lines',
      mask: 'lines',
    })
    gsap.from(aboutContentSplit.lines, {
      scrollTrigger,
      ease: 'power1',
      duration: 0.8,
      y: 100,
      autoAlpha: 0,
      stagger: 0.1
    })
    // Animate programme cards
    const cards = Array.from(programmCardWrapper.current?.children || []);
    cards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger,
        scale: 1.2,
        y: 200,
        x: 100,
        autoAlpha: 0,
        duration: 0.7,
        delay: index * 0.2,
        ease: 'power1.out',
        transformOrigin: 'left top'
      })
    })
  })

  return (
    <ProgrammesSection className="programmees_section">
      <ProgrammesHeading ref={programmesHeading}>Our Programmes</ProgrammesHeading>
      <DescriptionText ref={descriptionText}>Floor die open follow encourage bake ui ocean points every. Must can vendor comms streamline. </DescriptionText>
      <ProgrammeCardsWrapper className="programmCardWrapper" ref={programmCardWrapper}>
        {cardDetails.map((detail, index) => {
          const Icon = detail.icon
          return (
          <Card key={index}>
            {Icon ? (
              <CardIcon>
                <Icon />
              </CardIcon>
            ) : null}
            <p style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.25em', transition: 'color 350ms'}}>{detail.title}</p>
            <p style={{color: '#787F87', fontWeight: '400'}}>{detail.description}</p>
            <hr style={{marginBlock: '1em', border: '1px solid #E4E5E7'}} />
            <CardItemsWrapper>
              <CardItems>
                {detail.items.map((item, idx) => (
                  <div key={idx} style={{display: 'flex', columnGap: '0.5rem', alignItems: 'start'}}>
                    <IconCheck />
                    <span>{item}</span>
                  </div>
                ))}
              </CardItems>
              <ButtonTransparentBg>
                Learn More
                <ChevronRightIcon />
              </ButtonTransparentBg>
            </CardItemsWrapper>
          </Card>
        )})}
      </ProgrammeCardsWrapper>
    </ProgrammesSection>
  )
}

export default Programmes