import * as renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import { Tag } from './Tag'

const expectedTitle = 'tag'
const expectedHref = '#'

const Component = <Tag title={expectedTitle} href={expectedHref} />

describe('Testing Tag Component', () => {
  describe('Render', () => {
    it('正しくTagコンポーネントが表示されていること', () => {
      const App = renderer.create(Component)
      expect(App).toMatchSnapshot()
    })
  })

  describe('Props', () => {
    describe('title', () => {
      it('タグのタイトルが正しく渡っていること', () => {
        render(Component)
        expect(screen.getByRole('link')).toHaveTextContent(expectedTitle)
      })
    })

    describe('href', () => {
      it('タグのhrefに指定した値が正しく渡っていること', () => {
        render(Component)
        expect(screen.getByRole('link')).toHaveAttribute('href', expectedHref)
      })
    })
  })
})
