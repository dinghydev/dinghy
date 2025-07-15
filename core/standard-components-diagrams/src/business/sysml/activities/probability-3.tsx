import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PROBABILITY_3 = {
  _style:
    'shape=rhombus;html=1;whiteSpace=wrap;verticalLabelPosition=bottom;verticalAlignment=top;',
  _width: 350,
  _height: 80,
}

export function Probability3(props: DiagramNodeProps) {
  return <Shape {...PROBABILITY_3} {...props} />
}
