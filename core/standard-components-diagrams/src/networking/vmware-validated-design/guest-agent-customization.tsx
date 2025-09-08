import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GUEST_AGENT_CUSTOMIZATION = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.guest_agent_customization;',
  },
  _original_width: 50,
  _original_height: 46,
}

export function GuestAgentCustomization(props: DiagramNodeProps) {
  return (
    <Shape
      {...GUEST_AGENT_CUSTOMIZATION}
      {...props}
      _style={extendStyle(GUEST_AGENT_CUSTOMIZATION, props)}
    />
  )
}
