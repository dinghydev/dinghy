import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COVER_PLATE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.coverPlate',
  },
  _width: 220.00000000000003,
  _height: 125,
}

export function CoverPlate(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, COVER_PLATE)} />
}
