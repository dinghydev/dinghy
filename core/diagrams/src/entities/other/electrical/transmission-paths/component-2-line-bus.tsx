import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPONENT_2_LINE_BUS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transmission.2_line_bus;',
  },
  _width: 130,
  _height: 25,
}

export function Component2LineBus(props: NodeProps) {
  return (
    <Shape
      {...COMPONENT_2_LINE_BUS}
      {...props}
      _style={extendStyle(COMPONENT_2_LINE_BUS, props)}
    />
  )
}
