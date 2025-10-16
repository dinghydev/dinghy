import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CABLE_GROUP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transmission.cable_group;pointerEvents=1;',
  },
  _original_width: 130,
  _original_height: 130,
}

export function CableGroup(props: DiagramNodeProps) {
  return (
    <Shape
      {...CABLE_GROUP}
      {...props}
      _style={extendStyle(CABLE_GROUP, props)}
    />
  )
}
