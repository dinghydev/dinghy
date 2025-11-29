import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CABINET = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.cabinet;hasStand=1',
  },
  _width: 250,
  _height: 500,
}

export function Cabinet(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CABINET)} />
}
