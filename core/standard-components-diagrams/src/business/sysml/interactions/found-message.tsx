import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FOUND_MESSAGE = {
  _style:
    'edgeStyle=none;html=1;endArrow=open;endSize=12;verticalAlign=bottom;startArrow=sysMLFound;startSize=12;',
  _width: 160,
  _height: 0,
}

export function FoundMessage(props: DiagramNodeProps) {
  return <Dependency {...FOUND_MESSAGE} {...props} />
}
