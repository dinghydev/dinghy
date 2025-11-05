import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ALLVOICES = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.allvoices;fillColor=#807E7E;gradientColor=#1B1C1C',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Allvoices(props: NodeProps) {
  return (
    <Shape {...ALLVOICES} {...props} _style={extendStyle(ALLVOICES, props)} />
  )
}
