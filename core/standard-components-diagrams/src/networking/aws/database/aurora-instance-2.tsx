import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AURORA_INSTANCE_2 = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#C925D1;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.aurora_instance_alt;',
  _width: 60,
  _height: 60,
}

export function AuroraInstance2(props: DiagramNodeProps) {
  return (
    <Shape
      {...AURORA_INSTANCE_2}
      {...props}
      _style={extendStyle(AURORA_INSTANCE_2, props)}
    />
  )
}
