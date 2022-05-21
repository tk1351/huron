import { css } from '@emotion/react'

export const header = css({
  marginBottom: '10px'
})

export const articleTitle = css({
  fontSize: '24px',
  marginBottom: '5px'
})

export const list = css({
  margin: '0',
  padding: '0',
  listStyle: 'none',
  display: 'flex',
  gap: '10px'
})

export const section = css({
  marginBottom: '10px'
})

export const text = css({
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  width: '100%',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 3
})
