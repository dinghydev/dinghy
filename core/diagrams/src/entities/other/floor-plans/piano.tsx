import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PIANO = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.piano;',
  },
  _width: 135,
  _height: 143,
}

export function Piano(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PIANO)} />
}
