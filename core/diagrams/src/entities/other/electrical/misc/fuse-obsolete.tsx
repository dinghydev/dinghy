import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FUSE_OBSOLETE = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.fuse_3;',
  },
  _width: 100,
  _height: 12,
}

export function FuseObsolete(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FUSE_OBSOLETE)} />
}
