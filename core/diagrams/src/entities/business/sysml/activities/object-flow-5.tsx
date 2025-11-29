import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OBJECT_FLOW_5 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.objFlowL;strokeWidth=2;whiteSpace=wrap;',
  },
  _width: 1,
  _height: 60,
}

export function ObjectFlow5(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, OBJECT_FLOW_5)} />
}
