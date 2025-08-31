import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPONENT_4_LINE_BUS = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transmission.4_line_bus;',
  _width: 130,
  _height: 75,
}

export function Component4LineBus(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPONENT_4_LINE_BUS}
      {...props}
      _style={extendStyle(COMPONENT_4_LINE_BUS, props)}
    />
  )
}
