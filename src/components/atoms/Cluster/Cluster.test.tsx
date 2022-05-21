import * as renderer from 'react-test-renderer'
import { Cluster } from './Cluster'

const Component = (
  <Cluster>
    <div>App</div>
    <div>App2</div>
  </Cluster>
)

describe('Testing Cluster Component', () => {
  describe('Render', () => {
    it('正しくClusterコンポーネントが表示されていること', () => {
      const App = renderer.create(Component).toJSON()
      expect(App).toMatchSnapshot()
    })
  })
})
