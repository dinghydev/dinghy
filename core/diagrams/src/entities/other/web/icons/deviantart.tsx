import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEVIANTART = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.deviantart;fillColor=#00C659;gradientColor=#00813B',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Deviantart(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DEVIANTART)} />
}
