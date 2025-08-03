import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COPILOT_STUDIO = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/power_platform/CopilotStudio.svg;strokeColor=none;',
  _width: 68,
  _height: 62.32,
}

export function CopilotStudio(props: DiagramNodeProps) {
  return <Shape {...COPILOT_STUDIO} {...props} />
}
