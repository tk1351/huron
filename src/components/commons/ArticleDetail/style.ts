import { css } from '@emotion/react'
import { WHITE } from '../../../constants/constants'

export const article = css({
  overflow: 'hidden',
  padding: '20px 0'
})

export const articleTitle = css({
  fontSize: '48px'
})

export const list = css({
  margin: '0',
  padding: '0',
  listStyle: 'none',
  display: 'flex',
  gap: '10px'
})

export const markdownStyle = css({
  'div h1,h2,h3,h4,h5,h6:not(:first-of-type)': {
    marginTop: '20px'
  },
  '> h1,h2,h3,h4,h5,h6': {
    borderBottom: `1px solid ${WHITE}`,
    marginBottom: '20px'
  },
  '> h1': {
    fontSize: '48px'
  },
  '> h2': {
    fontSize: '32px'
  },
  '> h3': {
    fontSize: '24px'
  },
  p: {
    marginBottom: '20px'
  },
  ul: {
    marginBottom: '20px'
  }
})
