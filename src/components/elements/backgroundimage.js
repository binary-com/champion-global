import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import PropTypes from 'prop-types'

const Background = ({ children, img_name, style, brightness, ...props }) => (
    <StaticQuery
        query={graphql`
            query {
                allImageSharp {
                    edges {
                        node {
                            fluid(maxWidth: 1920) {
                                ...GatsbyImageSharpFluid_withWebp
                                originalName
                            }
                        }
                    }
                }
            }
        `}
        render={data => {
            const image = data.allImageSharp.edges.find(
                edge => edge.node.fluid.originalName === img_name,
            )
            if (!image) return null
            const fluidStack = [image.node.fluid]

            if (brightness) {
                fluidStack.push(
                    `linear-gradient(rgba(0,0,0,${brightness}), rgba(0,0,0,0))`,
                )
            }

            return (
                <BackgroundImage
                    Tag="div"
                    style={style}
                    fluid={fluidStack.reverse()}
                    {...props}
                >
                    {children}
                </BackgroundImage>
            )
        }}
    />
)

Background.propTypes = {
    brightness: PropTypes.string,
    children: PropTypes.node,
    img_name: PropTypes.string,
    style: PropTypes.object,
}
export default Background
