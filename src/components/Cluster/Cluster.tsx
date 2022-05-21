import { FC } from 'react'
import { cluster } from './style'
import { JustifyContent } from '../../constants/types'

type Props = {
  justifyContent?: JustifyContent
  gap?: string
  children: JSX.Element | JSX.Element[]
}

export const Cluster: FC<Props> = ({
  justifyContent = 'flex-start',
  gap = '0px',
  children
}) => <div css={cluster({ justifyContent, gap })}>{children}</div>
