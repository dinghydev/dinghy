import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BOOKCASE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.bookcase;',
  },
  _width: 120,
  _height: 30,
}

export function Bookcase(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BOOKCASE)} />
}
