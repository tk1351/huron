import { Header } from './components/commons/Header/Header'
import { Tag } from './components/atoms/Tag/Tag'
import { TextLink } from './components/atoms/TextLink/TextLink'

export const App = () => (
  <>
    <Header />
    <main>
      <Tag title="TypeScript" href="#" />
      <TextLink title="続きを読む" href="#" />
    </main>
  </>
)
