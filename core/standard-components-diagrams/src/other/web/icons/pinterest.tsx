import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PINTEREST = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.pinterest;fillColor=#E50B28;gradientColor=#890616',
  _width: 102.4,
  _height: 102.4,
}

export function Pinterest(props: DiagramNodeProps) {
  return (
    <Shape {...PINTEREST} {...props} _style={extendStyle(PINTEREST, props)} />
  )
}
