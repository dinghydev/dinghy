import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FAN_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.fan_2;',
  },
  _original_width: 58,
  _original_height: 8,
}

export function Fan2(props: DiagramNodeProps) {
  return <Shape {...FAN_2} {...props} _style={extendStyle(FAN_2, props)} />
}
