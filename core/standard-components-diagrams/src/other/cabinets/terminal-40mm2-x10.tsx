import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TERMINAL_40MM2_X10 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.terminal_40mm2_x10;',
  },
  _original_width: 110.00000000000001,
  _original_height: 50,
}

export function Terminal40mm2X10(props: DiagramNodeProps) {
  return (
    <Shape
      {...TERMINAL_40MM2_X10}
      {...props}
      _style={extendStyle(TERMINAL_40MM2_X10, props)}
    />
  )
}
