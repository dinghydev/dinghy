import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FAN_3 = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.fan;',
  _width: 100,
  _height: 100,
}

export function Fan3(props: DiagramNodeProps) {
  return <Shape {...FAN_3} {...props} />
}
