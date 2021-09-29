import React from "react"
import styled from "styled-components"

function Detail() {
  return (
    <Container>
      <Background>
        <img src="images/slider-badag.jpg" alt="" />
      </Background>
      <ImageTitle>
        <img src="images/logo.svg" alt="" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="images/play-icon-black.png" alt="" />
          <span>Play</span>
        </PlayButton>
        <TrailerButton>
          <img src="images/play-icon-white.png" alt="" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupButton>
          <img src="images/group-icon.png" alt="" />
        </GroupButton>
      </Controls>

      <SubTitle>
        2018 &middot; 7m &middot; Family, Fantasy, Kids, Animation
      </SubTitle>
      <Description>
        A Chinese mom who's sad when her grown son leaves home gets another
        chance at motherhood when one of her dumplings springs to life.But she
        finds that nothing stays cute and small forever.
      </Description>
    </Container>
  )
}

export default Detail

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0.8;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const ImageTitle = styled.div`
  width: 35vw;
  height: 30vh;
  min-width: 200px;
  min-height: 170px;
  margin-top: 60px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const Controls = styled.div`
  display: flex;
  align-items: center;
`

const PlayButton = styled.button`
  display: flex;
  align-items: center;
  height: 56px;
  margin-right: 22px;
  padding: 0 24px;
  border: none;
  border-radius: 4px;
  font-size: 15px;
  letter-spacing: 1.8px;
  background: rgb(249, 249, 249);
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background: rgb(198, 198, 198);
  }
`

const TrailerButton = styled(PlayButton)`
  border: 1px solid rgb(249, 249, 249);
  background: rgba(0, 0, 0, 0.3);
  color: rgb(249, 249, 249);
`

const AddButton = styled.button`
  width: 44px;
  height: 44px;
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgb(249, 249, 249);
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.3);
  cursor: pointer;

  span {
    font-size: 30px;
    color: rgb(249, 249, 249);
  }

  &:hover {
    background: rgba(0, 0, 0, 0.6);
  }
`

const GroupButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`

const SubTitle = styled.div`
  min-height: 20px;
  margin-top: 20px;
  font-size: 15px;
  color: rgb(249, 249, 249);
`

const Description = styled.div`
  max-width: 760px;
  margin-top: 16px;
  line-height: 1.4;
  font-size: 20px;
  color: rgb(249, 249, 249);
`
