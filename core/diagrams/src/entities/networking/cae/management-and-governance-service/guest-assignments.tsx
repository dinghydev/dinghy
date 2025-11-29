import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GUEST_ASSIGNMENTS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Guest_Assignments.svg;strokeColor=none;',
  },
  _original_width: 44,
  _original_height: 50,
}

export function GuestAssignments(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, GUEST_ASSIGNMENTS)} />
}
