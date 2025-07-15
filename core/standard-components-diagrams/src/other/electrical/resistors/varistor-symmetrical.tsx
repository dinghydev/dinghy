import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VARISTOR_SYMMETRICAL = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.resistors.symmetrical_varistor;',
  _width: 100,
  _height: 60,
}

export function VaristorSymmetrical(props: DiagramNodeProps) {
  return <Shape {...VARISTOR_SYMMETRICAL} {...props} />
}
