import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTROL_BUS = {
  _style: {
    entity:
      'html=1;strokeWidth=2;outlineConnect=0;dashed=0;align=center;fontSize=8;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.eip.control_bus;fillColor=#c0f5a9',
  },
  _original_width: 60,
  _original_height: 40,
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
