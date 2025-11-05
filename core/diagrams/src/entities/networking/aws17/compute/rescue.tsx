import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RESCUE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.rescue;fillColor=#F58534;gradientColor=none;',
  },
  _original_width: 63,
  _original_height: 66,
}

export function Rescue(props: NodeProps) {
  return <Shape {...RESCUE} {...props} _style={extendStyle(RESCUE, props)} />
}
