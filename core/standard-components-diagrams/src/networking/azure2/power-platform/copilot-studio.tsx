import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COPILOT_STUDIO = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/power_platform/CopilotStudio.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 62.32,
}

export function CopilotStudio(props: DiagramNodeProps) {
  return (
    <Shape
      {...COPILOT_STUDIO}
      {...props}
      _style={extendStyle(COPILOT_STUDIO, props)}
    />
  )
}
