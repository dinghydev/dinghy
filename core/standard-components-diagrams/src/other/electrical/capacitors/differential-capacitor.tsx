import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DIFFERENTIAL_CAPACITOR = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.capacitors.differential_capacitor;',
  _width: 100,
  _height: 80,
}

export function DifferentialCapacitor(props: DiagramNodeProps) {
  return (
    <Shape
      {...DIFFERENTIAL_CAPACITOR}
      {...props}
      _style={extendStyle(DIFFERENTIAL_CAPACITOR, props)}
    />
  )
}
