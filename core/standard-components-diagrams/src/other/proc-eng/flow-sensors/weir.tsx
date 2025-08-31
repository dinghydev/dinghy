import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WEIR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;outlineConnect=0;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.flow_sensors.weir;',
  },
  _width: 60,
  _height: 60,
}

export function Weir(props: DiagramNodeProps) {
  return <Shape {...WEIR} {...props} _style={extendStyle(WEIR, props)} />
}
