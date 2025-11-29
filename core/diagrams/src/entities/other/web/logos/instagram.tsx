import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INSTAGRAM = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.instagram;fillColor=#6FC0E4;gradientColor=#1E305B',
  },
  _original_width: 72.2,
  _original_height: 72.2,
}

export function Instagram(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, INSTAGRAM)} />
}
