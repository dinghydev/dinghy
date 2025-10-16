import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RANGE_1 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.range_1;',
  },
  _original_width: 50,
  _original_height: 62,
}

export function Range1(props: DiagramNodeProps) {
  return <Shape {...RANGE_1} {...props} _style={extendStyle(RANGE_1, props)} />
}
