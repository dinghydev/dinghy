import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RATE_4 = {
  _style:
    'edgeStyle=none;html=1;endArrow=open;endSize=12;verticalAlign=top;labelBackgroundColor=none;',
  _width: 160,
  _height: 0,
}

export function Rate4(props: DiagramNodeProps) {
  return <Dependency {...RATE_4} {...props} />
}
