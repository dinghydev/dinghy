import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OBJECT_FLOW_5 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.objFlowL;strokeWidth=2;whiteSpace=wrap;',
  },
  _original_width: 1,
  _original_height: 60,
}

export function ObjectFlow5(props: DiagramNodeProps) {
  return (
    <Shape
      {...OBJECT_FLOW_5}
      {...props}
      _style={extendStyle(OBJECT_FLOW_5, props)}
    />
  )
}
