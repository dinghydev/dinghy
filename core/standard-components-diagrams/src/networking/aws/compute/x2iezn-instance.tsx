import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X2IEZN_INSTANCE = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#ED7100;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.ec2_x2iezn_instance;',
  _width: 48,
  _height: 48,
}

export function X2ieznInstance(props: DiagramNodeProps) {
  return (
    <Shape
      {...X2IEZN_INSTANCE}
      {...props}
      _style={extendStyle(X2IEZN_INSTANCE, props)}
    />
  )
}
