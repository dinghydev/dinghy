import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SITEJOT = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.sitejot',
  },
  _original_width: 77.2,
  _original_height: 66,
}

export function Sitejot(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SITEJOT)} />
}
