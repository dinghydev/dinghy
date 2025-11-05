import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TUNEIN = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.tunein',
  },
  _original_width: 70,
  _original_height: 70,
}

export function Tunein(props: NodeProps) {
  return <Shape {...TUNEIN} {...props} _style={extendStyle(TUNEIN, props)} />
}
