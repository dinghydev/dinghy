import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROBABILITY_2 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.actProb;align=left;spacingLeft=5;verticalAlign=top;spacingTop=-3;fontStyle=1;',
  },
  _original_width: 120,
  _original_height: 160,
}

export function Probability2(props: DiagramNodeProps) {
  return (
    <Shape
      {...PROBABILITY_2}
      {...props}
      _style={extendStyle(PROBABILITY_2, props)}
    />
  )
}
