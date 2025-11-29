import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OBJECT_FLOW_6 = {
  _style: {
    entity: 'html=1;shape=mxgraph.sysml.objFlowR;whiteSpace=wrap;',
  },
  _width: 120,
  _height: 60,
}

export function ObjectFlow6(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, OBJECT_FLOW_6)} />
}
