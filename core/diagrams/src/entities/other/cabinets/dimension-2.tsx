import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DIMENSION_2 = {
  _style: {
    entity:
      'verticalLabelPosition=middle;dashed=0;shadow=0;html=1;shape=mxgraph.cabinets.dimensionBottom;verticalAlign=bottom;align=center;',
  },
  _width: 250,
  _height: 40,
}

export function Dimension2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DIMENSION_2)} />
}
