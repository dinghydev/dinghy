import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PROBABILITY_7 = {
  _style: 'shape=rect;whiteSpace=wrap;align=center;html=1;',
  _width: 250,
  _height: 60,
}

export function Probability7(props: DiagramNodeProps) {
  return <Shape {...PROBABILITY_7} {...props} />
}
