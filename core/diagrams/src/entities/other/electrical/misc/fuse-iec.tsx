import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FUSE_IEC = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.fuse_1;',
  },
  _width: 100,
  _height: 20,
}

export function FuseIec(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FUSE_IEC)} />
}
