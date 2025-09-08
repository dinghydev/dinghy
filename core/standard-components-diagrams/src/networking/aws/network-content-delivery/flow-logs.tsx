import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FLOW_LOGS = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.flow_logs;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function FlowLogs(props: DiagramNodeProps) {
  return (
    <Shape {...FLOW_LOGS} {...props} _style={extendStyle(FLOW_LOGS, props)} />
  )
}
