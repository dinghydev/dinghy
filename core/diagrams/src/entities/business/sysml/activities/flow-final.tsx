import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FLOW_FINAL = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.flowFinal;strokeWidth=2;verticalLabelPosition=bottom;verticalAlignment=top;',
  },
  _original_width: 40,
  _original_height: 40,
}

export function FlowFinal(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FLOW_FINAL)} />
}
