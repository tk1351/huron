import { FC, useEffect } from 'react'
import { MainPagePresentational } from './MainPagePresentational'
import { fetchArticles } from '../../../api/blogs/blogs'

const markdown = `
# h1

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis, augue eu finibus porttitor, nisi sapien rutrum risus, quis molestie dolor nisl sed ex. Praesent ex eros, dictum vel ullamcorper et, finibus nec justo. Aliquam erat volutpat. Sed quis justo varius, imperdiet turpis eget, volutpat urna. Cras at posuere orci, in mollis magna. Aenean quis elementum nisl. Pellentesque molestie nisi eu orci vehicula rhoncus. Donec placerat lorem sit amet sapien pretium, ac pellentesque ligula feugiat. Nam placerat semper nisl, in scelerisque leo fermentum vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi dapibus id nulla mollis laoreet. Pellentesque a est facilisis, euismod mi ac, maximus tortor. Pellentesque consequat nunc nisl, sed dapibus diam laoreet vitae. Sed mollis felis quis elit accumsan ultrices. Vivamus fringilla hendrerit ex. Maecenas mollis ligula ut purus blandit tristique.

## h2

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis, augue eu finibus porttitor, nisi sapien rutrum risus, quis molestie dolor nisl sed ex. Praesent ex eros, dictum vel ullamcorper et, finibus nec justo. Aliquam erat volutpat. Sed quis justo varius, imperdiet turpis eget, volutpat urna. Cras at posuere orci, in mollis magna. Aenean quis elementum nisl. Pellentesque molestie nisi eu orci vehicula rhoncus. Donec placerat lorem sit amet sapien pretium, ac pellentesque ligula feugiat. Nam placerat semper nisl, in scelerisque leo fermentum vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi dapibus id nulla mollis laoreet. Pellentesque a est facilisis, euismod mi ac, maximus tortor. Pellentesque consequat nunc nisl, sed dapibus diam laoreet vitae. Sed mollis felis quis elit accumsan ultrices. Vivamus fringilla hendrerit ex. Maecenas mollis ligula ut purus blandit tristique.

### h3

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis, augue eu finibus porttitor, nisi sapien rutrum risus, quis molestie dolor nisl sed ex. Praesent ex eros, dictum vel ullamcorper et, finibus nec justo. Aliquam erat volutpat. Sed quis justo varius, imperdiet turpis eget, volutpat urna. Cras at posuere orci, in mollis magna. Aenean quis elementum nisl. Pellentesque molestie nisi eu orci vehicula rhoncus. Donec placerat lorem sit amet sapien pretium, ac pellentesque ligula feugiat. Nam placerat semper nisl, in scelerisque leo fermentum vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi dapibus id nulla mollis laoreet. Pellentesque a est facilisis, euismod mi ac, maximus tortor. Pellentesque consequat nunc nisl, sed dapibus diam laoreet vitae. Sed mollis felis quis elit accumsan ultrices. Vivamus fringilla hendrerit ex. Maecenas mollis ligula ut purus blandit tristique.

https://github.com ?????????????????????????????????

- list1
- list2
- list3
  - list4
  - list5
    - list6
    - list7
`

const articles = [
  {
    id: '1',
    title: 'title',
    createdAt: '2022-01-01',
    tags: [{ id: '1', title: 'typescript', href: '#' }],
    content: markdown
  },
  {
    id: '2',
    title: 'title',
    createdAt: '2022-01-01',
    tags: [{ id: '1', title: 'typescript', href: '#' }],
    content: markdown
  },
  {
    id: '3',
    title: 'title',
    createdAt: '2022-01-01',
    tags: [{ id: '1', title: 'typescript', href: '#' }],
    content: markdown
  },
  {
    id: '4',
    title: 'title',
    createdAt: '2022-01-01',
    tags: [{ id: '1', title: 'typescript', href: '#' }],
    content: markdown
  },
  {
    id: '5',
    title: 'title',
    createdAt: '2022-01-01',
    tags: [{ id: '1', title: 'typescript', href: '#' }],
    content: markdown
  }
]

export const MainPageContainer: FC = () => {
  useEffect(() => {
    ;(async () => {
      await fetchArticles()
    })()
  }, [])

  return <MainPagePresentational articles={articles} pageCount={5} />
}
