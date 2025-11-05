import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MONITORING_CONSOLE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.monitoring_console;',
  },
  _original_width: 28.000000000000004,
  _original_height: 28.000000000000004,
}

export function MonitoringConsole(props: NodeProps) {
  return (
    <Shape
      {...MONITORING_CONSOLE}
      {...props}
      _style={extendStyle(MONITORING_CONSOLE, props)}
    />
  )
}
