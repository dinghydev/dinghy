import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const POTENTIOMETER = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.resistors.potentiometer_1;',
  },
  _original_width: 100,
  _original_height: 40,
}

export function Potentiometer(props: DiagramNodeProps) {
  return (
    <Shape
      {...POTENTIOMETER}
      {...props}
      _style={extendStyle(POTENTIOMETER, props)}
    />
  )
}
