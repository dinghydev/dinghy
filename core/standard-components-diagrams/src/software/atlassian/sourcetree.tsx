import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SOURCETREE = {
  _style:
    'image;html=1;image=img/lib/atlassian/Sourcetree_Logo.svg;strokeColor=none;',
  _width: 57,
  _height: 71,
}

export function Sourcetree(props: DiagramNodeProps) {
  return (
    <Shape {...SOURCETREE} {...props} _style={extendStyle(SOURCETREE, props)} />
  )
}
