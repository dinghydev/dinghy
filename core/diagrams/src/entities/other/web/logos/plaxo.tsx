import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PLAXO = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.plaxo;fillColor=#414F5C;strokeColor=none',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Plaxo(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PLAXO)} />
}
