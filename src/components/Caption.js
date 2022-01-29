import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  margin: 0 auto 2em;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  span {
    margin: 0 0.5rem;
  }
`

const PhotoCaption = styled.p`
  /* display: inline-block; */
  text-align: right;
  color: gray;
  font-size: 0.875rem;
`

const Caption = ({ caption }) => {
  return (
    <Wrapper>
      <PhotoCaption>{caption}</PhotoCaption>
    </Wrapper>
  )
}

export default Caption
