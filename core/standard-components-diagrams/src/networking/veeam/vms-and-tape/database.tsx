import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATABASE = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.database;',
  },
  _width: 62.8,
  _height: 54,
}

export function Database(props: DiagramNodeProps) {
  return (
    <Shape {...DATABASE} {...props} _style={extendStyle(DATABASE, props)} />
  )
}
