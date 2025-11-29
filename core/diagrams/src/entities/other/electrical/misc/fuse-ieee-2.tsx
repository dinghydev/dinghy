import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FUSE_IEEE_2 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.fuse_4;',
  },
  _width: 100,
  _height: 32,
}

export function FuseIeee2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FUSE_IEEE_2)} />
}
