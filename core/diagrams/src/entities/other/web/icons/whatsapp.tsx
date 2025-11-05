import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WHATSAPP = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.whatsapp;fillColor=#4FE238;gradientColor=#138709',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Whatsapp(props: NodeProps) {
  return (
    <Shape {...WHATSAPP} {...props} _style={extendStyle(WHATSAPP, props)} />
  )
}
