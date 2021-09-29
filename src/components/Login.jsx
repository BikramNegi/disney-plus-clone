import React from "react"
import styled from "styled-components"

function Login() {
  return (
    <Container>
      {/* <Content> */}
      <CTA>
        <CTALogoOne src="images/cta-logo-one.svg" />
        <SignUp>Get All here</SignUp>
        <Description>
          Get Premier Access to raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 09/29/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Description>
        <CTALogoTwo src="images/cta-logo-two.png" />
      </CTA>
      {/* </Content> */}
    </Container>
  )
}

export default Login

const Container = styled.div`
  min-height: calc(100vh - 70px);
  //   padding: 0 calc(3.5vw + 5px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow-x: hidden;

  &:before {
    content: "";
    background: url("images/login-background.jpg") top center/ cover no-repeat
      fixed;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.7;
    z-index: -1;
  }
`

// const Content = styled.div``

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CTALogoOne = styled.img``

const CTALogoTwo = styled.img`
  width: 90%;
`

const SignUp = styled.a`
  margin-top: 8px;
  margin-bottom: 12px;
  width: 100%;
  background: #0063e5;
  font-size: 18px;
  font-weight: bold;
  padding: 17px 0;
  text-align: center;
  color: #f9f9f9;
  text-transform: uppercase;
  border-radius: 4px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;

  &:hover {
    background: #0483ee;
  }
`
const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`
