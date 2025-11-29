import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TERMINAL_50MM2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.terminal_50mm2;',
  },
  _width: 12.5,
  _height: 55.00000000000001,
}

export function Terminal50mm2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TERMINAL_50MM2)} />
}
