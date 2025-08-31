import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X1_INSTANCE = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.x1_instance;fillColor=#F58534;gradientColor=none;',
  _width: 60,
  _height: 63,
}

export function X1Instance(props: DiagramNodeProps) {
  return (
    <Shape
      {...X1_INSTANCE}
      {...props}
      _style={extendStyle(X1_INSTANCE, props)}
    />
  )
}
