import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATABASE_2 = {
  _style:
    'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.database_2',
  _width: 78,
  _height: 100,
}

export function Database2(props: DiagramNodeProps) {
  return (
    <Shape {...DATABASE_2} {...props} _style={extendStyle(DATABASE_2, props)} />
  )
}
