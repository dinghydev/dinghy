import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const THERMAL_ELEMENT = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.thermal_element',
  },
  _width: 100,
  _height: 32,
}

export function ThermalElement(props: DiagramNodeProps) {
  return (
    <Shape
      {...THERMAL_ELEMENT}
      {...props}
      _style={extendStyle(THERMAL_ELEMENT, props)}
    />
  )
}
