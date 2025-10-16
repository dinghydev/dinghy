import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ALLVOICES = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.allvoices',
  },
  _original_width: 84,
  _original_height: 79.60000000000001,
}

export function Allvoices(props: DiagramNodeProps) {
  return (
    <Shape {...ALLVOICES} {...props} _style={extendStyle(ALLVOICES, props)} />
  )
}
