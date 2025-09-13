import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OBJECT_FLOW_4 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.objFlowR;strokeWidth=2;whiteSpace=wrap;',
  },
  _width: 0,
  _height: 60,
}

export function ObjectFlow4(props: DiagramNodeProps) {
  return (
    <Shape
      {...OBJECT_FLOW_4}
      {...props}
      _style={extendStyle(OBJECT_FLOW_4, props)}
    />
  )
}
