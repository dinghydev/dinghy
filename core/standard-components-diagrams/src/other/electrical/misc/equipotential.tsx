import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EQUIPOTENTIAL = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.signal_sources.equipotential;',
  },
  _original_width: 90,
  _original_height: 90,
}

export function Equipotential(props: DiagramNodeProps) {
  return (
    <Shape
      {...EQUIPOTENTIAL}
      {...props}
      _style={extendStyle(EQUIPOTENTIAL, props)}
    />
  )
}
