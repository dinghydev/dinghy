import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INCLUDE = {
  _style:
    'edgeStyle=none;html=1;endArrow=open;verticalAlign=bottom;dashed=1;labelBackgroundColor=none;',
  _width: 160,
  _height: 0,
}

export function Include(props: DiagramNodeProps) {
  return <Dependency {...INCLUDE} {...props} />
}
