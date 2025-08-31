import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const XNOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.logic_gates.logic_gate;operation=xor;negating=1;negSize=0.15;',
  },
  _width: 100,
  _height: 60,
}

export function Xnor(props: DiagramNodeProps) {
  return <Shape {...XNOR} {...props} _style={extendStyle(XNOR, props)} />
}
