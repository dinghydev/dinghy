import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PROTOPAGE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.protopage;fillColor=#4B78C0;gradientColor=#294282',
  },
  _original_width: 78.80000000000001,
  _original_height: 80,
}

export function Protopage(props: NodeProps) {
  return (
    <Shape {...PROTOPAGE} {...props} _style={extendStyle(PROTOPAGE, props)} />
  )
}
