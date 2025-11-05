import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SHADOW = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.shadow;fillColor=#5294CF;gradientColor=none;',
  },
  _original_width: 85.5,
  _original_height: 91.5,
}

export function Shadow(props: NodeProps) {
  return <Shape {...SHADOW} {...props} _style={extendStyle(SHADOW, props)} />
}
