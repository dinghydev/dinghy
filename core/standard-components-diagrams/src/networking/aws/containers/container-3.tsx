import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTAINER_3 = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#ED7100;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.container_3;',
  _width: 48,
  _height: 31,
}

export function Container3(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTAINER_3}
      {...props}
      _style={extendStyle(CONTAINER_3, props)}
    />
  )
}
