import { FC, MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { header, link } from './style'
import { APP_NAME } from '../../../constants/constants'

export const Header: FC = () => {
  const navigate = useNavigate()
  const pushMainPage = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    navigate('/')
  }
  return (
    <header css={header}>
      <h1>
        <a href="#" css={link} onClick={(event) => pushMainPage(event)}>
          {APP_NAME}
        </a>
      </h1>
    </header>
  )
}
