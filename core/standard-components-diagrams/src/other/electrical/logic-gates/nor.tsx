import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NOR = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.logic_gates.logic_gate;operation=or;negating=1;negSize=0.15;',
  _width: 100,
  _height: 60,
}

export function Nor(props: DiagramNodeProps) {
  return <Shape {...NOR} {...props} _style={extendStyle(NOR, props)} />
}
