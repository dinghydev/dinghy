import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOST_MESSAGE = {
  _style:
    'edgeStyle=none;html=1;endArrow=sysMLLost;endSize=12;verticalAlign=bottom;',
  _width: 160,
  _height: 0,
}

export function LostMessage(props: DiagramNodeProps) {
  return <Dependency {...LOST_MESSAGE} {...props} />
}
