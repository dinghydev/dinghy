import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PROJECT_TIMESHEET = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/ProjectTimesheet.svg;',
  _width: 68,
  _height: 65.16,
}

export function ProjectTimesheet(props: DiagramNodeProps) {
  return <Shape {...PROJECT_TIMESHEET} {...props} />
}
