import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const READERNAUT = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.readernaut;fillColor=#000000;strokeColor=none',
  },
  _original_width: 72,
  _original_height: 72,
}

export function Readernaut(props: NodeProps) {
  return (
    <Shape {...READERNAUT} {...props} _style={extendStyle(READERNAUT, props)} />
  )
}
