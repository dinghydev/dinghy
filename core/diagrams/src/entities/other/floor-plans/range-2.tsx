import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RANGE_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.range_2;',
  },
  _original_width: 75,
  _original_height: 62,
}

export function Range2(props: NodeProps) {
  return <Shape {...RANGE_2} {...props} _style={extendStyle(RANGE_2, props)} />
}
