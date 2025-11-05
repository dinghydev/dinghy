import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LINE_CABLE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transmission.line_cable;',
  },
  _width: 130,
  _height: 60,
}

export function LineCable(props: NodeProps) {
  return (
    <Shape {...LINE_CABLE} {...props} _style={extendStyle(LINE_CABLE, props)} />
  )
}
