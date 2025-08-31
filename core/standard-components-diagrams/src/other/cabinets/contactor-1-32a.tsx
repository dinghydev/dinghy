import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTACTOR_1_32A = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.contactor_1_32a;',
  },
  _width: 27,
  _height: 43,
}

export function Contactor132a(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTACTOR_1_32A}
      {...props}
      _style={extendStyle(CONTACTOR_1_32A, props)}
    />
  )
}
