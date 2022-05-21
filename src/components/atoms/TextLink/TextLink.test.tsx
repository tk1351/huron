import * as renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import { TextLink } from './TextLink'

const expectedTitle = 'textLink'
const expectedHref = '#'

const Component = <TextLink title={expectedTitle} href={expectedHref} />

describe('Testing TextLink Component', () => {
  describe('Render', () => {
    it('正しくTextLinkコンポーネントが表示されていること', () => {
      const App = renderer.create(Component)
      expect(App).toMatchSnapshot()
    })
  })

  describe('Props', () => {
    describe('title', () => {
      it('リンクのタイトルが正しく渡っていること', () => {
        render(Component)
        expect(screen.getByRole('link')).toHaveTextContent(expectedTitle)
      })
    })

    describe('href', () => {
      it('リンクのhrefに指定した値が正しく渡っていること', () => {
        render(Component)
        expect(screen.getByRole('link')).toHaveAttribute('href', expectedHref)
      })
    })
  })
})
