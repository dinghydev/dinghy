import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TERMINAL_75MM2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.terminal_75mm2;',
  },
  _width: 15,
  _height: 70,
}

export function Terminal75mm2(props: NodeProps) {
  return (
    <Shape
      {...TERMINAL_75MM2}
      {...props}
      _style={extendStyle(TERMINAL_75MM2, props)}
    />
  )
}
