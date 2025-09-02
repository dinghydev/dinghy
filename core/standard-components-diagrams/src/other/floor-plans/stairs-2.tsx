import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STAIRS_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.stairs;direction=south;',
  },
  _original_width: 100,
  _original_height: 300,
}

export function Stairs2(props: DiagramNodeProps) {
  return (
    <Shape {...STAIRS_2} {...props} _style={extendStyle(STAIRS_2, props)} />
  )
}
