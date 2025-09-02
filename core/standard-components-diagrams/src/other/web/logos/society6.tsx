import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SOCIETY6 = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.society6;fillColor=#000000;strokeColor=none',
  },
  _original_width: 74.8,
  _original_height: 53,
}

export function Society6(props: DiagramNodeProps) {
  return (
    <Shape {...SOCIETY6} {...props} _style={extendStyle(SOCIETY6, props)} />
  )
}
