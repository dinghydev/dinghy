import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATABASE_MIRROR = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.databases.database_mirror;',
  },
  _width: 60,
  _height: 59,
}

export function DatabaseMirror(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATABASE_MIRROR}
      {...props}
      _style={extendStyle(DATABASE_MIRROR, props)}
    />
  )
}
