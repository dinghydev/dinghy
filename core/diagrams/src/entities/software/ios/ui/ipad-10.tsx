import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IPAD_10 = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios7.misc.ipad10inch;strokeColor=#c0c0c0;',
  },
  _width: 488,
  _height: 693,
}

export function Ipad10(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, IPAD_10)} />
}
