import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SERVER_WITH_VEEAM_AGENT = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.server_with_veeam_agent;',
  },
  _original_width: 40,
  _original_height: 52,
}

export function ServerWithVeeamAgent(props: NodeProps) {
  return (
    <Shape
      {...SERVER_WITH_VEEAM_AGENT}
      {...props}
      _style={extendStyle(SERVER_WITH_VEEAM_AGENT, props)}
    />
  )
}
