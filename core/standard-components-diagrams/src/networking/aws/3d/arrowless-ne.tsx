import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARROWLESS_NE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.arrowlessNE;fillColor=#000000;aspect=fixed;',
  _width: 31.6,
  _height: 18,
}

export function ArrowlessNe(props: DiagramNodeProps) {
  return (
    <Shape
      {...ARROWLESS_NE}
      {...props}
      _style={extendStyle(ARROWLESS_NE, props)}
    />
  )
}
