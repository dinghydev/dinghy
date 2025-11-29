import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BED_DOUBLE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.bed_double;',
  },
  _width: 200,
  _height: 180,
}

export function BedDouble(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BED_DOUBLE)} />
}
