import { FC } from "react";
import styled from "styled-components";

const AchievementSection = styled.section`
  height: 100%;
  background-color: #2463FF;
  display: grid;
  grid-template-columns: 1fr;
`

const AchivementContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5em;
  padding: 2.5em 2em;
  justify-content: center;
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
  }
  & p:last-child {
    font-size: 1rem;
    font-weight: 400;
    color: #fff;
  }
`

const Achievement: FC = () => {
  return (
    <AchievementSection>
      <AchivementContainer>
        <div>
          <AchievementItem>
            <p>84,000+</p>
            <p>Graduates Trained</p>
          </AchievementItem>
          <AchievementItem>
            <p>38+</p>
            <p>Courses Offered</p>
          </AchievementItem>
          <AchievementItem>
            <p>512+</p>
            <p>Industry Leaders Made</p>
          </AchievementItem>
        </div>
        <div>
          <AchievementItem>
            <p>60+</p>
            <p>Years of Experience </p>
          </AchievementItem>
          <AchievementItem>
            <p>75+</p>
            <p>Awards for Best School of Animation</p>
          </AchievementItem>
          <AchievementItem>
            <p>100+</p>
            <p>Nationalities Represented</p>
          </AchievementItem>
        </div>
      </AchivementContainer>
    </AchievementSection>
  );
}

export default Achievement