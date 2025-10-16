import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VARISTOR_SYMMETRICAL = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.resistors.symmetrical_varistor;',
  },
  _width: 100,
  _height: 60,
}

export function VaristorSymmetrical(props: DiagramNodeProps) {
  return (
    <Shape
      {...VARISTOR_SYMMETRICAL}
      {...props}
      _style={extendStyle(VARISTOR_SYMMETRICAL, props)}
    />
  )
}
