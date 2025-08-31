import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATABASE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.database;',
  },
  _width: 42.5,
  _height: 50,
}

export function Database(props: DiagramNodeProps) {
  return (
    <Shape {...DATABASE} {...props} _style={extendStyle(DATABASE, props)} />
  )
}
