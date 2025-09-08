import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LINE_CABLE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transmission.line_cable;',
  },
  _original_width: 130,
  _original_height: 60,
}

export function LineCable(props: DiagramNodeProps) {
  return (
    <Shape {...LINE_CABLE} {...props} _style={extendStyle(LINE_CABLE, props)} />
  )
}
