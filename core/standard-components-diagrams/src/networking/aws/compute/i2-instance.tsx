import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const I2_INSTANCE = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#ED7100;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.i2;',
  },
  _width: 48,
  _height: 48,
}

export function I2Instance(props: DiagramNodeProps) {
  return (
    <Shape
      {...I2_INSTANCE}
      {...props}
      _style={extendStyle(I2_INSTANCE, props)}
    />
  )
}
