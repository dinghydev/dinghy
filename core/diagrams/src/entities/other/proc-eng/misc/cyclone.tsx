import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CYCLONE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.cyclone;',
  },
  _width: 100,
  _height: 80,
}

export function Cyclone(props: NodeProps) {
  return <Shape {...CYCLONE} {...props} _style={extendStyle(CYCLONE, props)} />
}
