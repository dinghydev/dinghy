import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEMUX = {
  _style: {
    entity:
      'shadow=0;dashed=0;align=center;html=1;strokeWidth=1;shape=mxgraph.electrical.abstract.mux2;operation=demux;whiteSpace=wrap;',
  },
  _width: 80,
  _height: 120,
}

export function Demux(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DEMUX)} />
}
