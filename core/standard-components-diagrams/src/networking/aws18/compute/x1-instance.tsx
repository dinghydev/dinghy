import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X1_INSTANCE = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#232F3E;fillColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.x1_instance;',
  },
  _original_width: 60,
  _original_height: 60,
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
