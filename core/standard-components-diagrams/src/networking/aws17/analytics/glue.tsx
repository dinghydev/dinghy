import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GLUE = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.glue;fillColor=#F58534;gradientColor=none;',
  _width: 82.5,
  _height: 99,
}

export function Glue(props: DiagramNodeProps) {
  return <Shape {...GLUE} {...props} _style={extendStyle(GLUE, props)} />
}
