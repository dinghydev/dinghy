import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PROTOPAGE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.protopage;fillColor=#4B78C0;gradientColor=#294282',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Protopage(props: DiagramNodeProps) {
  return (
    <Shape {...PROTOPAGE} {...props} _style={extendStyle(PROTOPAGE, props)} />
  )
}
