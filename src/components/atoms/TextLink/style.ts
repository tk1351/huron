import { css } from '@emotion/react'
import { TextDecoration } from '../../../constants/types'

type TextLinkProps = {
  textDecoration: TextDecoration
}

export const link = ({ textDecoration }: TextLinkProps) =>
  css({
    textDecoration
  })
