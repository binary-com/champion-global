import React from 'react'
import styled from 'styled-components'
import Container from '../containers/container'
import { Column } from '../containers/grid'
import { Header, Text } from '../../themes/typography'
import screen from '../../themes/screens'
import scrollTo from 'gatsby-plugin-smoothscroll'
import Logo from '../../images/svg/logo-white.svg'
import Mail from '../../images/svg/mail.svg'
import Phone from '../../images/svg/telephone.svg'

const FooterSection = styled.footer`
    padding: 4rem 0;
    margin: 0;
    background-color: var(--color-blue);

    ${Text} {
        color: var(--color-white);
        font-size: 1.4rem;
    }
    @media ${screen.md} {
        text-align: center;
    }
`
const FooterGrid = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr 1fr;
    grid-column-gap: 1.5rem;
    grid-row-gap: 2rem;

    @media ${screen.md} {
        grid-row-gap: 3rem;

        ${Text} {
            font-size: 1.2rem;
        }
    }
    @media ${screen.sm} {
        grid-template-columns: 1fr;
        grid-row-gap: 3rem;
    }
`
const ColGrid = styled.div`
    display: grid;
    grid-template-columns: 3rem 1fr;
    grid-row-gap: 2rem;

    @media ${screen.sm} {
        grid-template-columns: 3rem 1fr;
        grid-row-gap: 2rem;
    }
`
const Col = styled(Column)`
    padding: 0;
`
const Company = styled.div`
    display: grid;
    grid-template-columns: 4rem 1fr;
    grid-column-gap: 1.9rem;
    align-items: center;
    justify-items: start;
    margin-bottom: 1rem;
`
const CompanyInfo = styled.div`
    margin: 0;

    @media ${screen.md} {
        display: block;
    }
`
const Links = styled.div`
    text-align: left;

    @media ${screen.md} {
        width: 100%;
    }
`
const FooterLink = styled(Text)`
    cursor: pointer;

    @media ${screen.md} {
        padding: 0.5rem 0;
    }
`

const Footer = () => (
    <FooterSection>
        <Container>
            <FooterGrid>
                <Col>
                    <Company>
                        <Logo />
                        <CompanyInfo>
                            <Text weight="bold">
                                Champion Global Business Services
                            </Text>
                            <Text weight="bold">Sdn Bhd (1336703-K)</Text>
                        </CompanyInfo>
                    </Company>
                    <Text lh="2">3500, Jalan Teknokrat 3</Text>
                    <Text lh="2">
                        63000 Cyberjaya, Selangor Malaysia
                    </Text>
                </Col>
                <Col>
                    <Header as="h6" color="white" margin="0 0 1.5rem 0">
                        Contact us
                    </Header>
                    <ColGrid columns="3rem 1fr" columngap="1rem">
                        <Phone />
                        <Text lh="2">+603-83228178</Text>
                        <Mail />
                        <Text lh="2">hr@championgbs.com</Text>
                    </ColGrid>
                </Col>
                <Col>
                    <Links>
                        <Header as="h6" color="white" margin="0 0 0.8rem 0">
                            Links
                        </Header>
                        <FooterLink lh="2" onClick={() => scrollTo('#who')}>
                            Who we are
                        </FooterLink>
                        <FooterLink lh="2" onClick={() => scrollTo('#what')}>
                            What we do
                        </FooterLink>
                        <FooterLink lh="2" onClick={() => scrollTo('#culture')}>
                            Our culture
                        </FooterLink>
                    </Links>
                </Col>
            </FooterGrid>
        </Container>
    </FooterSection>
)
export default Footer
