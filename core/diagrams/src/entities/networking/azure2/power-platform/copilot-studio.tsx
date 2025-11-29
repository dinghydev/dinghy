import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COPILOT_STUDIO = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/power_platform/CopilotStudio.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 62.32,
}

export function CopilotStudio(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, COPILOT_STUDIO)} />
}
