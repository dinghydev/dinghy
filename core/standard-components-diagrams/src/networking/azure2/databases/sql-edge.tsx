import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SQL_EDGE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/Azure_SQL_Edge.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function SqlEdge(props: DiagramNodeProps) {
  return (
    <Shape {...SQL_EDGE} {...props} _style={extendStyle(SQL_EDGE, props)} />
  )
}
