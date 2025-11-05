import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EXPAND = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.expand;fillColor=#c0c0c0;',
  },
  _width: 24,
  _height: 6,
}

export function Expand(props: NodeProps) {
  return <Shape {...EXPAND} {...props} _style={extendStyle(EXPAND, props)} />
}
