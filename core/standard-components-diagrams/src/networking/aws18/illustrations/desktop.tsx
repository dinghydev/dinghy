import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DESKTOP = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;gradientColor=none;fontColor=#545B64;strokeColor=none;fillColor=#879196;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.illustration_desktop;pointerEvents=1',
  },
  _width: 100,
  _height: 91,
}

export function Desktop(props: DiagramNodeProps) {
  return <Shape {...DESKTOP} {...props} _style={extendStyle(DESKTOP, props)} />
}
