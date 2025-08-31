import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APPLICATION = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.application;',
  },
  _width: 34,
  _height: 34,
}

export function Application(props: DiagramNodeProps) {
  return (
    <Shape
      {...APPLICATION}
      {...props}
      _style={extendStyle(APPLICATION, props)}
    />
  )
}
