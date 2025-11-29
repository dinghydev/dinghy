import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BED_SINGLE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.bed_single;',
  },
  _width: 100,
  _height: 180,
}

export function BedSingle(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BED_SINGLE)} />
}
