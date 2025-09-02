import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MAGNETORESISTOR = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.resistors.magnetoresistor;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function Magnetoresistor(props: DiagramNodeProps) {
  return (
    <Shape
      {...MAGNETORESISTOR}
      {...props}
      _style={extendStyle(MAGNETORESISTOR, props)}
    />
  )
}
