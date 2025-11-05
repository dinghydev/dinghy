import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AND = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.logic_gates.logic_gate;operation=and;',
  },
  _width: 100,
  _height: 60,
}

export function And(props: NodeProps) {
  return <Shape {...AND} {...props} _style={extendStyle(AND, props)} />
}
