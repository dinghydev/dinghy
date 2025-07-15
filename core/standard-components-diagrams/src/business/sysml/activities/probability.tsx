import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PROBABILITY = {
  _style:
    'html=1;shape=mxgraph.sysml.probability;whiteSpace=wrap;align=center;',
  _width: 120,
  _height: 160,
}

export function Probability(props: DiagramNodeProps) {
  return <Shape {...PROBABILITY} {...props} />
}
