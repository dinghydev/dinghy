import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GENERIC = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.generic;fillColor=#5294CF;gradientColor=none;',
  },
  _original_width: 79.5,
  _original_height: 79.5,
}

export function Generic(props: NodeProps) {
  return <Shape {...GENERIC} {...props} _style={extendStyle(GENERIC, props)} />
}
