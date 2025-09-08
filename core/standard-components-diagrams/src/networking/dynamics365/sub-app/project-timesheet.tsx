import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PROJECT_TIMESHEET = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/ProjectTimesheet.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 65.16,
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
