import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FAN_3 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.fan;',
  },
  _width: 60,
  _height: 60,
}

export function Fan3(props: DiagramNodeProps) {
  return <Shape {...FAN_3} {...props} _style={extendStyle(FAN_3, props)} />
}
