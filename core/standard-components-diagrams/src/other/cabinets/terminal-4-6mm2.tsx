import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TERMINAL_4_6MM2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.terminal_4_6mm2;',
  },
  _original_width: 2.5,
  _original_height: 30,
}

export function Terminal46mm2(props: DiagramNodeProps) {
  return (
    <Shape
      {...TERMINAL_4_6MM2}
      {...props}
      _style={extendStyle(TERMINAL_4_6MM2, props)}
    />
  )
}
