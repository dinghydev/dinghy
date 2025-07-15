import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BAMBOO = {
  _style: 'image;image=img/lib/atlassian/Bamboo_Logo.svg;html=1;',
  _width: 64,
  _height: 74,
}

export function Bamboo(props: DiagramNodeProps) {
  return <Shape {...BAMBOO} {...props} />
}
