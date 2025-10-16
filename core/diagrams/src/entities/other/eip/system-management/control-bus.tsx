import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CONTROL_BUS = {
  _style: {
    entity:
      'html=1;strokeWidth=2;outlineConnect=0;dashed=0;align=center;fontSize=8;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.eip.control_bus;fillColor=#c0f5a9',
  },
  _width: 60,
  _height: 40,
}

export function ControlBus(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTROL_BUS}
      {...props}
      _style={extendStyle(CONTROL_BUS, props)}
    />
  )
}
