import { Header } from './components/commons/Header/Header'
import { ArticleCard } from './components/commons/ArticleCard/ArticleCard'

export const App = () => (
  <>
    <Header />
    <main>
      <ArticleCard
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacinia augue, id luctus tellus. Etiam laoreet quam molestie, pretium felis eget,"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacinia
        augue, id luctus tellus. Etiam laoreet quam molestie, pretium felis
        eget, pretium tellus. Fusce et dui sed nisi feugiat elementum eget
        mattis mi. Maecenas et sapien accumsan erat volutpat faucibus. Vivamus
        sodales ultricies mi ac tempus. Phasellus auctor nibh arcu, ultricies
        convallis ipsum congue id. Praesent aliquam venenatis eros nec
        tincidunt. Pellentesque ut justo porttitor, pharetra ligula in, commodo
        neque. Aliquam id feugiat dolor, eget interdum felis. Suspendisse
        potenti. Nam maximus turpis vel lacus fringilla, et tempor lorem
        hendrerit. Ut laoreet ac turpis at tristique. Sed semper ut dui in
        blandit."
        createdAt="2022-01-01"
        tags={[
          { id: '1', title: 'TypeScript', href: '#' },
          { id: '2', title: 'React', href: '#' }
        ]}
      />
    </main>
  </>
)
