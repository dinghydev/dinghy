import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BAMBOO = {
  _style:
    'image;html=1;image=img/lib/atlassian/Bamboo_Logo.svg;strokeColor=none;',
  _width: 64,
  _height: 74,
}

export function Bamboo(props: DiagramNodeProps) {
  return <Shape {...BAMBOO} {...props} />
}
