import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ALLVOICES = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.allvoices',
  _width: 84,
  _height: 79.60000000000001,
}

export function Allvoices(props: DiagramNodeProps) {
  return (
    <Shape {...ALLVOICES} {...props} _style={extendStyle(ALLVOICES, props)} />
  )
}
