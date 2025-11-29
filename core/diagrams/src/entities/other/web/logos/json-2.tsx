import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const JSON_2 = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.json_2',
  },
  _width: 80.4,
  _height: 25.200000000000003,
}

export function Json2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, JSON_2)} />
}
