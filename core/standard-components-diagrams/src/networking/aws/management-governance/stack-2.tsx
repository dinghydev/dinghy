import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STACK_2 = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#E7157B;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.stack2;',
  },
  _width: 60,
  _height: 60,
}

export function Stack2(props: DiagramNodeProps) {
  return <Shape {...STACK_2} {...props} _style={extendStyle(STACK_2, props)} />
}
