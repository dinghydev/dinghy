import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DIIGO = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.diigo;fillColor=#2973D2;strokeColor=none',
  },
  _original_width: 61.2,
  _original_height: 68.8,
}

export function Diigo(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DIIGO)} />
}
