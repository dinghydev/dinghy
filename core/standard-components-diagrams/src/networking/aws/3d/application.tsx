import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APPLICATION = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.application;fillColor=#4286c5;strokeColor=#57A2D8;aspect=fixed;',
  },
  _width: 62,
  _height: 68.8,
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
