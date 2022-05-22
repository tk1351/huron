import { Routes, Route } from 'react-router-dom'
import { Header } from './components/commons/Header/Header'
import { MainPageContainer } from './components/pages/MainPage/MainPageContainer'
import { DetailPageContainer } from './components/pages/DetailPage/DetailPageContainer'
import { TagsPageContainer } from './components/pages/TagsPage/TagsPageContainer'

export const App = () => (
  <>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<MainPageContainer />} />
        <Route path="/1" element={<DetailPageContainer />} />
        <Route path="/tag" element={<TagsPageContainer />} />
      </Routes>
    </main>
  </>
)
