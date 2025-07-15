import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FAN_2 = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.fan_2;',
  _width: 58,
  _height: 8,
}

export function Fan2(props: DiagramNodeProps) {
  return <Shape {...FAN_2} {...props} />
}
