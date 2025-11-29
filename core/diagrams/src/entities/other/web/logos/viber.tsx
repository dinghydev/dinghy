import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VIBER = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.viber;fillColor=#7D539F;strokeColor=none',
  },
  _original_width: 77.4,
  _original_height: 85.2,
}

export function Viber(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VIBER)} />
}
