import styled from "styled-components"
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import GobelinLogo from '../../assets/images/gobelin-logo.tsx'
import HamburgerIcon from "../../assets/icons/Hamburger.tsx"
import ChevronDownIcon from "../../assets/icons/ChevronDown.tsx"
import GobelinHeroBanner from "./GobelinHeroBanner.tsx"

const HeaderSection = styled.header`
  padding: 1rem;
`

const NavSection = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 2rem
`

const MenuDesktop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    flex-grow: 1;
  }
`

const DeskopMenuList = styled.div`
  display: none;
  align-items: center;
  gap: 0 1.5rem;
  @media (min-width: 768px) {
    display: flex;
  }
`

const MenuMobile = styled.div`
  display: flex;
  align-items: center;
  gap: 0 0.5rem;
  @media (min-width: 768px) {
    display: none;
  }
  & svg {
    color: #313437;
  }
  & span {
    text-transform: uppercase;
  }
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 0 0.75rem;
  cursor: pointer;
`

const CountryLogo = styled.img`
  width: 16px;
  height: 16px;
`

const LangContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0 0.5rem;
`

gsap.registerPlugin(useGSAP);

const GobelinHero = () => {
  const headerSection = useRef<HTMLHeadElement>(null)

  useGSAP(() => {
    gsap.from(headerSection.current, {
      autoAlpha: 0,
      scale: 1.1,
      duration: 1.2,
      ease: 'power1',
    })
  })

  return (
    <>
      <HeaderSection ref={headerSection}>
        <NavSection>
          <GobelinLogo />
          <MenuMobile>
            <HamburgerIcon />
            <span>Menu</span>
          </MenuMobile>
          <MenuDesktop>
            <DeskopMenuList>
              {['The School', 'Programmes', 'Fields'].map((item: string) =>
                <Menu key={item}>{item} <ChevronDownIcon /></Menu>
              )}
            </DeskopMenuList>
            <Menu>
              <LangContainer>
                <CountryLogo src="/united-kingdom.svg" alt="Country logo" />
                <span>EN</span>
              </LangContainer>
              <ChevronDownIcon />
            </Menu>
          </MenuDesktop>
        </NavSection>
        <GobelinHeroBanner />
      </HeaderSection>
    </>
  )
}

export default GobelinHero