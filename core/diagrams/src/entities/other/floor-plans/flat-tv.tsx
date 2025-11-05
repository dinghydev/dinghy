import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FLAT_TV = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.flat_tv;',
  },
  _width: 70,
  _height: 10,
}

export function FlatTv(props: NodeProps) {
  return <Shape {...FLAT_TV} {...props} _style={extendStyle(FLAT_TV, props)} />
}
