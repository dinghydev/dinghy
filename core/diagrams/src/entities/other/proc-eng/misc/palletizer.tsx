import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PALLETIZER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.palletizer2;',
  },
  _width: 80,
  _height: 100,
}

export function Palletizer(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PALLETIZER)} />
}
