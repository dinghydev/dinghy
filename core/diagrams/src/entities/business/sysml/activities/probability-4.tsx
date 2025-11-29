import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PROBABILITY_4 = {
  _style: {
    entity: 'html=1;shape=mxgraph.sysml.objFlowR;whiteSpace=wrap;align=center;',
  },
  _width: 250,
  _height: 60,
}

export function Probability4(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PROBABILITY_4)} />
}
