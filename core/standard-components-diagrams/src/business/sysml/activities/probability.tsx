import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROBABILITY = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.probability;whiteSpace=wrap;align=center;',
  },
  _width: 120,
  _height: 160,
}

export function Probability(props: DiagramNodeProps) {
  return (
    <Shape
      {...PROBABILITY}
      {...props}
      _style={extendStyle(PROBABILITY, props)}
    />
  )
}
