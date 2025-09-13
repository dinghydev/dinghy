import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TABLE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.table;',
  },
  _width: 90,
  _height: 50,
}

export function Table(props: DiagramNodeProps) {
  return <Shape {...TABLE} {...props} _style={extendStyle(TABLE, props)} />
}
