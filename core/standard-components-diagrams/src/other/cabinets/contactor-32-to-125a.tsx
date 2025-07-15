import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONTACTOR_32_TO_125A = {
  _style:
    'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.contactor_32_125a;',
  _width: 30,
  _height: 50,
}

export function Contactor32To125a(props: DiagramNodeProps) {
  return <Shape {...CONTACTOR_32_TO_125A} {...props} />
}
