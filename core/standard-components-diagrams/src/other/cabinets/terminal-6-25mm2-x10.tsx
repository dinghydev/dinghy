import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TERMINAL_6_25MM2_X10 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.terminal_6_25mm2_x10;',
  },
  _original_width: 50,
  _original_height: 37.5,
}

export function Terminal625mm2X10(props: DiagramNodeProps) {
  return (
    <Shape
      {...TERMINAL_6_25MM2_X10}
      {...props}
      _style={extendStyle(TERMINAL_6_25MM2_X10, props)}
    />
  )
}
