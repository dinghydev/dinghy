import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const R6A_INSTANCE = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#ED7100;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.ec2_r6a_instance;',
  _width: 48,
  _height: 48,
}

export function R6aInstance(props: DiagramNodeProps) {
  return (
    <Shape
      {...R6A_INSTANCE}
      {...props}
      _style={extendStyle(R6A_INSTANCE, props)}
    />
  )
}
