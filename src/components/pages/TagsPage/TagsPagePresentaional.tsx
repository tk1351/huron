import { FC } from 'react'
import { heading } from './style'

type Props = {
  tag: string
  children: JSX.Element
}

export const TagsPagePresentaional: FC<Props> = ({ tag, children }) => (
  <div>
    <h2 css={heading}>&quot;{tag}&quot; の結果</h2>
    {children}
  </div>
)
