import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MYSPACE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.myspace;fillColor=#003399;strokeColor=none',
  },
  _original_width: 63,
  _original_height: 70.2,
}

export function Myspace(props: DiagramNodeProps) {
  return <Shape {...MYSPACE} {...props} _style={extendStyle(MYSPACE, props)} />
}
