import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EM_4000 = {
  _style: {
    entity:
      'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.f5.em_4000;',
  },
  _width: 168,
  _height: 20,
}

export function Em4000(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, EM_4000)} />
}
