import { FC } from 'react'
import { DetailPagePresentational } from './DetailPagePresentational'

const title = 'title'
const createdAt = '2022-01-01'
const tags = [{ id: '1', title: 'TypeScript', href: '#' }]
const content = `
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

export const DetailPageContainer: FC = () => (
  <DetailPagePresentational
    title={title}
    createdAt={createdAt}
    tags={tags}
    content={content}
  />
)
