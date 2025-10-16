import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const UM_HUNT_GROUP = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.um_hunt_group;',
  },
  _original_width: 59,
  _original_height: 48,
}

export function UmHuntGroup(props: DiagramNodeProps) {
  return (
    <Shape
      {...UM_HUNT_GROUP}
      {...props}
      _style={extendStyle(UM_HUNT_GROUP, props)}
    />
  )
}
