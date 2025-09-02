import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROBABILITY_3 = {
  _style: {
    entity:
      'shape=rhombus;html=1;whiteSpace=wrap;verticalLabelPosition=bottom;verticalAlignment=top;',
  },
  _original_width: 350,
  _original_height: 80,
}

export function Probability3(props: DiagramNodeProps) {
  return (
    <Shape
      {...PROBABILITY_3}
      {...props}
      _style={extendStyle(PROBABILITY_3, props)}
    />
  )
}
