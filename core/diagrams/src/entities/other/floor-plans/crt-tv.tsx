import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CRT_TV = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.crt_tv;',
  },
  _width: 60,
  _height: 40,
}

export function CrtTv(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CRT_TV)} />
}
