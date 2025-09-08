import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DOOR_BI_FOLD = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.doorBifold;dx=0.3;',
  },
  _original_width: 160,
  _original_height: 40,
}

export function DoorBiFold(props: DiagramNodeProps) {
  return (
    <Shape
      {...DOOR_BI_FOLD}
      {...props}
      _style={extendStyle(DOOR_BI_FOLD, props)}
    />
  )
}
