import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EXTEND = {
  _style:
    'edgeStyle=none;html=1;startArrow=open;endArrow=none;startSize=12;verticalAlign=bottom;dashed=1;labelBackgroundColor=none;',
  _width: 160,
  _height: 0,
}

export function Extend(props: DiagramNodeProps) {
  return <Dependency {...EXTEND} {...props} />
}
