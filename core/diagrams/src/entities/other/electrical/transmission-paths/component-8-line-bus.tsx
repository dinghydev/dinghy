import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMPONENT_8_LINE_BUS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transmission.8_line_bus;',
  },
  _width: 130,
  _height: 180,
}

export function Component8LineBus(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPONENT_8_LINE_BUS}
      {...props}
      _style={extendStyle(COMPONENT_8_LINE_BUS, props)}
    />
  )
}
