import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GUEST_ASSIGNMENTS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Guest_Assignments.svg;strokeColor=none;',
  },
  _width: 44,
  _height: 50,
}

export function GuestAssignments(props: DiagramNodeProps) {
  return (
    <Shape
      {...GUEST_ASSIGNMENTS}
      {...props}
      _style={extendStyle(GUEST_ASSIGNMENTS, props)}
    />
  )
}
