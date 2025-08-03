import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SOURCETREE = {
  _style:
    'image;html=1;image=img/lib/atlassian/Sourcetree_Logo.svg;strokeColor=none;',
  _width: 57,
  _height: 71,
}

export function Sourcetree(props: DiagramNodeProps) {
  return <Shape {...SOURCETREE} {...props} />
}
