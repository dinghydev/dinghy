import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DIGG = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.digg',
  },
  _original_width: 58,
  _original_height: 56,
}

export function Digg(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DIGG)} />
}
