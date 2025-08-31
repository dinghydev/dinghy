import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROJECT_TIMESHEET = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/ProjectTimesheet.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 65.16,
}

export function ProjectTimesheet(props: DiagramNodeProps) {
  return (
    <Shape
      {...PROJECT_TIMESHEET}
      {...props}
      _style={extendStyle(PROJECT_TIMESHEET, props)}
    />
  )
}
