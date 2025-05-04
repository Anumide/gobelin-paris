import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ExpoScaleEase } from "gsap/EasePack";
import styled from "styled-components";
import GobelinLogo from '../../assets/images/gobelin-logo.tsx'

const LoaderSection = styled.section`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
`
const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(23.5vh + 150px);
  height: calc(23.5vh + 150px);
  background-color: #fff;
  border-radius: 50%;
  position: relative;
  left: 1px
`

const RoundWhiteBg = styled.div`
  position: absolute;
  inset: 0;
  border: 3px solid #F4F5F5;
  border-radius: 50%;
  background-color: #fff;
`

const RoundBlackLoader = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
`

const GobelinLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  inset: 3px;
  position: absolute;
  background-color: #fff;
  border-radius: 50%;
`

const GobelinLogoResize = styled(GobelinLogo)`
  width: 23.5vh;
  height: 23.5vh;
`

const VideoWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -1;
`

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: 1;
`

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`

gsap.registerPlugin(useGSAP, ExpoScaleEase);

const GobelinLoader = () => {
  const blackLoaderRef = useRef<HTMLDivElement>(null);
  const videoWrapper = useRef<HTMLDivElement>(null);
  const videoElement = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    gsap.fromTo(blackLoaderRef.current, { 
      background: "conic-gradient(from 180deg at 50% 50%, #000 0deg 0deg, transparent 0deg 360deg)",
    },
    {
      background: "conic-gradient(from 180deg at 50% 50%, #000 0deg 360deg, transparent 0deg 360deg)",
      duration: 7,
      ease: "expoScale(10,2.5,power2.inOut)",
      onComplete: () => {
        if (videoWrapper.current) {
          videoWrapper.current.style.zIndex = '1'
        }
        if(videoElement.current) {
          videoElement.current.play()
        }
      },
    }
    )
  })
  return (
    <LoaderSection>
      <LoaderContainer>
        <RoundWhiteBg />
        <RoundBlackLoader ref={blackLoaderRef} />
        <GobelinLogoContainer>
          <GobelinLogoResize />
        </GobelinLogoContainer>
      </LoaderContainer> 
      <VideoWrapper ref={videoWrapper}>
        <VideoContainer>
          <Video ref={videoElement} muted playsInline preload="auto">
            <source src="https://res.cloudinary.com/dhgg7l2bw/video/upload/v1745250320/gobelin-paris/Gobelins_Logo_Zoom_zgbgrz.webm" />
          </Video>
        </VideoContainer>
      </VideoWrapper>
    </LoaderSection>
  )
}

export default GobelinLoader;