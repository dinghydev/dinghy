import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MEMRISTOR_2 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.resistors.memristor_2;',
  },
  _width: 100,
  _height: 24,
}

export function Memristor2(props: DiagramNodeProps) {
  return (
    <Shape
      {...MEMRISTOR_2}
      {...props}
      _style={extendStyle(MEMRISTOR_2, props)}
    />
  )
}
