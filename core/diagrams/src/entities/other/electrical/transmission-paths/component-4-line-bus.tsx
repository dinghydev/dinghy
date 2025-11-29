import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPONENT_4_LINE_BUS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transmission.4_line_bus;',
  },
  _width: 130,
  _height: 75,
}

export function Component4LineBus(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, COMPONENT_4_LINE_BUS)} />
}
