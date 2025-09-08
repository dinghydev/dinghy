import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DOOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.doorLeft;aspect=fixed;',
  },
  _original_width: 80,
  _original_height: 85,
}

export function Door(props: DiagramNodeProps) {
  return <Shape {...DOOR} {...props} _style={extendStyle(DOOR, props)} />
}
