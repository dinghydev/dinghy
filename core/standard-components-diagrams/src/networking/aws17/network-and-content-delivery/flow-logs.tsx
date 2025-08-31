import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FLOW_LOGS = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.flow_logs;fillColor=#F58536;gradientColor=none;',
  },
  _width: 69,
  _height: 72,
}

export function FlowLogs(props: DiagramNodeProps) {
  return (
    <Shape {...FLOW_LOGS} {...props} _style={extendStyle(FLOW_LOGS, props)} />
  )
}
