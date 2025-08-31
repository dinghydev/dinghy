import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.logic_gates.logic_gate;operation=or;',
  },
  _width: 100,
  _height: 60,
}

export function Or(props: DiagramNodeProps) {
  return <Shape {...OR} {...props} _style={extendStyle(OR, props)} />
}
