import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const G5_INSTANCE = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#ED7100;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.ec2_g5_instance;',
  _width: 48,
  _height: 48,
}

export function G5Instance(props: DiagramNodeProps) {
  return (
    <Shape
      {...G5_INSTANCE}
      {...props}
      _style={extendStyle(G5_INSTANCE, props)}
    />
  )
}
