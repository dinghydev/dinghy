import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MULTIPLE_CAPACITOR = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.capacitors.multiple_capacitor;',
  _width: 100,
  _height: 130,
}

export function MultipleCapacitor(props: DiagramNodeProps) {
  return (
    <Shape
      {...MULTIPLE_CAPACITOR}
      {...props}
      _style={extendStyle(MULTIPLE_CAPACITOR, props)}
    />
  )
}
