import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PROBABILITY = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.probability;whiteSpace=wrap;align=center;',
  },
  _original_width: 120,
  _original_height: 160,
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
