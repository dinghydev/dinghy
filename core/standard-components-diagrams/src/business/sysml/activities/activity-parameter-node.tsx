import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ACTIVITY_PARAMETER_NODE = {
  _style:
    'html=1;shape=mxgraph.sysml.actParamNode;align=left;spacingLeft=15;verticalAlign=top;spacingTop=-3;',
  _width: 300,
  _height: 135,
}

export function ActivityParameterNode(props: DiagramNodeProps) {
  return <Shape {...ACTIVITY_PARAMETER_NODE} {...props} />
}
