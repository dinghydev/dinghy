import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VIRB = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.virb;fillColor=#536873;gradientColor=#161A1D',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Virb(props: DiagramNodeProps) {
  return <Shape {...VIRB} {...props} _style={extendStyle(VIRB, props)} />
}
