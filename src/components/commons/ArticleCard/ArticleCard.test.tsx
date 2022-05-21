import * as renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import { ArticleCard } from './ArticleCard'

const expectedTitle = 'expectedTitle'
const expectedCreatedAt = 'expectedCreatedAt'
const expectedTags = [
  { id: '1', title: 'react', href: '#' },
  { id: '2', title: 'vue', href: '#' }
]
const expectedContent = 'expectedContent'

const Component = (
  <ArticleCard
    title={expectedTitle}
    createdAt={expectedCreatedAt}
    tags={expectedTags}
    content={expectedContent}
  />
)

describe('Testing ArticleCard Component', () => {
  describe('Render', () => {
    it('正しくArticleCardコンポーネントが表示されていること', () => {
      const App = renderer.create(Component).toJSON()
      expect(App).toMatchSnapshot()
    })
  })

  describe('Props', () => {
    describe('title', () => {
      it('カードのタイトルが正しく渡っていること', () => {
        render(Component)
        expect(screen.getByRole('heading')).toHaveTextContent(expectedTitle)
      })
    })

    describe('createdAt', () => {
      it('作成日が正しく渡っていること', () => {
        render(Component)
        expect(screen.getByText(expectedCreatedAt)).toBeInTheDocument()
      })
    })

    describe('tags', () => {
      it('渡されたオブジェクトの数だけ、tagが正しく表示されていること', () => {
        render(Component)
        const listItems = screen.getAllByRole('listitem')
        expect(listItems).toHaveLength(expectedTags.length)
      })
    })

    describe('content', () => {
      it('本文が正しく渡っていること', () => {
        render(Component)
        expect(screen.getByText(expectedContent)).toBeInTheDocument()
      })
    })
  })
})
