import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OBJECT_FLOW_7 = {
  _style: {
    entity: 'html=1;shape=mxgraph.sysml.objFlowL;whiteSpace=wrap;',
  },
  _original_width: 120,
  _original_height: 60,
}

export function ObjectFlow7(props: DiagramNodeProps) {
  return (
    <Shape
      {...OBJECT_FLOW_7}
      {...props}
      _style={extendStyle(OBJECT_FLOW_7, props)}
    />
  )
}
