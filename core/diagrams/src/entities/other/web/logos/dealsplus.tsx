import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DEALSPLUS = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.dealsplus;fillColor=#935492',
  },
  _original_width: 76,
  _original_height: 66.60000000000001,
}

export function Dealsplus(props: DiagramNodeProps) {
  return (
    <Shape {...DEALSPLUS} {...props} _style={extendStyle(DEALSPLUS, props)} />
  )
}
