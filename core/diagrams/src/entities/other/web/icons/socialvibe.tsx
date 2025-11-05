import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SOCIALVIBE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.socialvibe;fillColor=#FA16E2;gradientColor=#DF064B',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Socialvibe(props: NodeProps) {
  return (
    <Shape {...SOCIALVIBE} {...props} _style={extendStyle(SOCIALVIBE, props)} />
  )
}
