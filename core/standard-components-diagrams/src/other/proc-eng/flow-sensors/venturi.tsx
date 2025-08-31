import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VENTURI = {
  _style:
    'verticalLabelPosition=bottom;align=center;outlineConnect=0;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.flow_sensors.venturi;',
  _width: 50,
  _height: 40,
}

export function Venturi(props: DiagramNodeProps) {
  return <Shape {...VENTURI} {...props} _style={extendStyle(VENTURI, props)} />
}
