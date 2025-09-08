import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VEEAM_AGENT_FOR_WINDOWS = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.veeam_agent_for_windows;',
  },
  _original_width: 34,
  _original_height: 34,
}

export function VeeamAgentForWindows(props: DiagramNodeProps) {
  return (
    <Shape
      {...VEEAM_AGENT_FOR_WINDOWS}
      {...props}
      _style={extendStyle(VEEAM_AGENT_FOR_WINDOWS, props)}
    />
  )
}
