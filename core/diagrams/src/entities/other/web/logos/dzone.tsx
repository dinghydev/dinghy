import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DZONE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.dzone',
  },
  _width: 87.60000000000001,
  _height: 61.2,
}

export function Dzone(props: NodeProps) {
  return <Shape {...DZONE} {...props} _style={extendStyle(DZONE, props)} />
}
