import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X2IEDN_INSTANCE = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#ED7100;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.ec2_x2iedn_instance;',
  _width: 48,
  _height: 48,
}

export function X2iednInstance(props: DiagramNodeProps) {
  return (
    <Shape
      {...X2IEDN_INSTANCE}
      {...props}
      _style={extendStyle(X2IEDN_INSTANCE, props)}
    />
  )
}
