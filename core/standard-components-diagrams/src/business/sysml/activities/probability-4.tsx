import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PROBABILITY_4 = {
  _style: {
    entity: 'html=1;shape=mxgraph.sysml.objFlowR;whiteSpace=wrap;align=center;',
  },
  _width: 250,
  _height: 60,
}

export function Probability4(props: DiagramNodeProps) {
  return (
    <Shape
      {...PROBABILITY_4}
      {...props}
      _style={extendStyle(PROBABILITY_4, props)}
    />
  )
}
