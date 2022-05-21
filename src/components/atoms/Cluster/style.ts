import { css } from '@emotion/react'
import { JustifyContent } from '../../../constants/types'

type ClusterProps = {
  justifyContent: JustifyContent
  gap: string
}

export const cluster = ({ justifyContent, gap }: ClusterProps) =>
  css({
    display: 'flex',
    justifyContent,
    gap: `${gap}`
  })
