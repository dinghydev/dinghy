import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TERMINAL_4_6MM2_X10 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.terminal_4_6mm2_x10;',
  },
  _width: 25,
  _height: 30,
}

export function Terminal46mm2X10(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TERMINAL_4_6MM2_X10)} />
}
