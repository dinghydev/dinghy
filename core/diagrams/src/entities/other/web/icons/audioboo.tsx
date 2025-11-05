import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AUDIOBOO = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.audioboo;fillColor=#EB35CF;gradientColor=#8C0E35',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Audioboo(props: NodeProps) {
  return (
    <Shape {...AUDIOBOO} {...props} _style={extendStyle(AUDIOBOO, props)} />
  )
}
