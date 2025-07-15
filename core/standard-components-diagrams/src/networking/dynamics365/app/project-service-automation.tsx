import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PROJECT_SERVICE_AUTOMATION = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/ProjectServiceAutomation.svg;',
  _width: 68,
  _height: 63.480000000000004,
}

export function ProjectServiceAutomation(props: DiagramNodeProps) {
  return <Shape {...PROJECT_SERVICE_AUTOMATION} {...props} />
}
