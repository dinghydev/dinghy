import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ADJUST = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.adjust;gradientColor=none;sketch=0;',
  },
  _width: 80,
  _height: 20,
}

export function Adjust(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ADJUST)} />
}
