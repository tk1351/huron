import * as renderer from 'react-test-renderer'
import { Header } from './Header'

describe('Testing Header Component', () => {
  describe('Render', () => {
    it('正しくHeaderコンポーネントが描画されていること', () => {
      const App = renderer.create(<Header />).toJSON()
      expect(App).toMatchSnapshot()
    })
  })
})
