import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SENSING_LINK_SQUIB = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.sensing_link_squib',
  },
  _width: 130,
  _height: 40,
}

export function SensingLinkSquib(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SENSING_LINK_SQUIB)} />
}
