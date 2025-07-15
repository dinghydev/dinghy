import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GUEST_ASSIGNMENTS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Guest_Assignments.svg;',
  _width: 44,
  _height: 50,
}

export function GuestAssignments(props: DiagramNodeProps) {
  return <Shape {...GUEST_ASSIGNMENTS} {...props} />
}
