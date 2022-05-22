import { css } from '@emotion/react'
import { GREEN } from '../../../constants/constants'

export const wrapper = css({
  overflow: 'hidden',
  padding: '20px 0',
  'article:not(:first-of-type)': {
    marginTop: '20px'
  }
})

export const paginate = css({
  marginTop: '40px',
  padding: '0',
  backgroundColor: GREEN,
  listStyle: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  '> li > a': {
    cursor: 'pointer'
  }
})
