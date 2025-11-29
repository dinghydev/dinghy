import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TERMINAL_75MM2_X10 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.terminal_75mm2_x10;',
  },
  _width: 150,
  _height: 70,
}

export function Terminal75mm2X10(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TERMINAL_75MM2_X10)} />
}
