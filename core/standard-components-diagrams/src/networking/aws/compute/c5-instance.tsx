import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const C5_INSTANCE = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#ED7100;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.c5_instance;',
  _width: 48,
  _height: 48,
}

export function C5Instance(props: DiagramNodeProps) {
  return (
    <Shape
      {...C5_INSTANCE}
      {...props}
      _style={extendStyle(C5_INSTANCE, props)}
    />
  )
}
