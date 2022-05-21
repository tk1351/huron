import { FC } from 'react'
import { header, link } from './style'
import { APP_NAME } from '../../../constants/constants'

export const Header: FC = () => (
  <header css={header}>
    <h1>
      <a href="#" css={link}>
        {APP_NAME}
      </a>
    </h1>
  </header>
)
