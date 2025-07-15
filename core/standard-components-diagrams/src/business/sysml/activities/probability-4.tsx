import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PROBABILITY_4 = {
  _style: 'html=1;shape=mxgraph.sysml.objFlowR;whiteSpace=wrap;align=center;',
  _width: 250,
  _height: 60,
}

export function Probability4(props: DiagramNodeProps) {
  return <Shape {...PROBABILITY_4} {...props} />
}
