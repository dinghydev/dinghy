import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FAN_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.fan_2;',
  },
  _width: 58,
  _height: 8,
}

export function Fan2(props: NodeProps) {
  return <Shape {...FAN_2} {...props} _style={extendStyle(FAN_2, props)} />
}
