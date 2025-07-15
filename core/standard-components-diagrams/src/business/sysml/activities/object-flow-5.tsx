import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OBJECT_FLOW_5 = {
  _style: 'html=1;shape=mxgraph.sysml.objFlowL;strokeWidth=2;whiteSpace=wrap;',
  _width: 1,
  _height: 60,
}

export function ObjectFlow5(props: DiagramNodeProps) {
  return <Shape {...OBJECT_FLOW_5} {...props} />
}
