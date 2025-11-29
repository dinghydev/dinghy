import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PROBABILITY_2 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.actProb;align=left;spacingLeft=5;verticalAlign=top;spacingTop=-3;fontStyle=1;',
  },
  _width: 120,
  _height: 160,
}

export function Probability2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PROBABILITY_2)} />
}
