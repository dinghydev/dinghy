import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FLOW_LOGS = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.flow_logs;fillColor=#F58536;gradientColor=none;',
  },
  _original_width: 69,
  _original_height: 72,
}

export function FlowLogs(props: NodeProps) {
  return (
    <Shape {...FLOW_LOGS} {...props} _style={extendStyle(FLOW_LOGS, props)} />
  )
}
