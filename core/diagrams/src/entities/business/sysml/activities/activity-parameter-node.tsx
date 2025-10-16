import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ACTIVITY_PARAMETER_NODE = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.actParamNode;align=left;spacingLeft=15;verticalAlign=top;spacingTop=-3;',
  },
  _width: 300,
  _height: 135,
}

export function ActivityParameterNode(props: DiagramNodeProps) {
  return (
    <Shape
      {...ACTIVITY_PARAMETER_NODE}
      {...props}
      _style={extendStyle(ACTIVITY_PARAMETER_NODE, props)}
    />
  )
}
