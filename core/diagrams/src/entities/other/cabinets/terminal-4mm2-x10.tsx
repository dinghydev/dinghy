import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TERMINAL_4MM2_X10 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.terminal_4mm2_x10;',
  },
  _original_width: 25,
  _original_height: 25,
}

export function Terminal4mm2X10(props: DiagramNodeProps) {
  return (
    <Shape
      {...TERMINAL_4MM2_X10}
      {...props}
      _style={extendStyle(TERMINAL_4MM2_X10, props)}
    />
  )
}
