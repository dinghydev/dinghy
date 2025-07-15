import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONTROL_FLOW = {
  _style:
    'html=1;verticalAlign=top;labelBackgroundColor=none;endArrow=open;endFill=0;',
  _width: 160,
  _height: 0,
}

export function ControlFlow(props: DiagramNodeProps) {
  return <Dependency {...CONTROL_FLOW} {...props} />
}
