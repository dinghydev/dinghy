import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TERMINAL_4MM2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.terminal_4mm2;',
  },
  _width: 2.5,
  _height: 25,
}

export function Terminal4mm2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TERMINAL_4MM2)} />
}
