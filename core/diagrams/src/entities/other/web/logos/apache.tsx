import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const APACHE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.apache',
  },
  _width: 42.6,
  _height: 85.2,
}

export function Apache(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, APACHE)} />
}
