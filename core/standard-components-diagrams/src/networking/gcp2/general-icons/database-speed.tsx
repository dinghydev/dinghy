import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATABASE_SPEED = {
  _style:
    'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.database_speed',
  _width: 69,
  _height: 100,
}

export function DatabaseSpeed(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATABASE_SPEED}
      {...props}
      _style={extendStyle(DATABASE_SPEED, props)}
    />
  )
}
