import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EQUIPOTENTIAL_2 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.signal_sources.protective_earth;',
  },
  _original_width: 25,
  _original_height: 20,
}

export function Equipotential2(props: DiagramNodeProps) {
  return (
    <Shape
      {...EQUIPOTENTIAL_2}
      {...props}
      _style={extendStyle(EQUIPOTENTIAL_2, props)}
    />
  )
}
