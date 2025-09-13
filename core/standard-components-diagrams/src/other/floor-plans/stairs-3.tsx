import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STAIRS_3 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.stairsRest;',
  },
  _width: 300,
  _height: 200,
}

export function Stairs3(props: DiagramNodeProps) {
  return (
    <Shape {...STAIRS_3} {...props} _style={extendStyle(STAIRS_3, props)} />
  )
}
