import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONFORM = {
  _style:
    'edgeStyle=none;html=1;endArrow=open;endSize=12;dashed=1;verticalAlign=bottom;',
  _width: 160,
  _height: 0,
}

export function Conform(props: DiagramNodeProps) {
  return <Dependency {...CONFORM} {...props} />
}
