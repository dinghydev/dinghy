import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TERMINAL_4_6MM2_X10 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.terminal_4_6mm2_x10;',
  },
  _original_width: 25,
  _original_height: 30,
}

export function Terminal46mm2X10(props: DiagramNodeProps) {
  return (
    <Shape
      {...TERMINAL_4_6MM2_X10}
      {...props}
      _style={extendStyle(TERMINAL_4_6MM2_X10, props)}
    />
  )
}
