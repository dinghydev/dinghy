import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TERMINAL_75MM2_X10 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.terminal_75mm2_x10;',
  },
  _original_width: 150,
  _original_height: 70,
}

export function Terminal75mm2X10(props: DiagramNodeProps) {
  return (
    <Shape
      {...TERMINAL_75MM2_X10}
      {...props}
      _style={extendStyle(TERMINAL_75MM2_X10, props)}
    />
  )
}
