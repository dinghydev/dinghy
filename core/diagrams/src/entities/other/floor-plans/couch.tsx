import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COUCH = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.couch;',
  },
  _width: 150,
  _height: 80,
}

export function Couch(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, COUCH)} />
}
