import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TIME_EVENT = {
  _style:
    'html=1;shape=mxgraph.sysml.timeEvent;strokeWidth=2;verticalLabelPosition=bottom;verticalAlignment=top;',
  _width: 35,
  _height: 40,
}

export function TimeEvent(props: DiagramNodeProps) {
  return <Shape {...TIME_EVENT} {...props} />
}
