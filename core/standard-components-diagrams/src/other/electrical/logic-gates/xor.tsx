import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const XOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.logic_gates.logic_gate;operation=xor;',
  },
  _width: 100,
  _height: 60,
}

export function Xor(props: DiagramNodeProps) {
  return <Shape {...XOR} {...props} _style={extendStyle(XOR, props)} />
}
