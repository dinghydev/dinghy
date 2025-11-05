import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPONENT_3_LINE_BUS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transmission.3_line_bus;',
  },
  _width: 130,
  _height: 30,
}

export function Component3LineBus(props: NodeProps) {
  return (
    <Shape
      {...COMPONENT_3_LINE_BUS}
      {...props}
      _style={extendStyle(COMPONENT_3_LINE_BUS, props)}
    />
  )
}
