import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MEDIA_POOL = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.media_pool;',
  },
  _original_width: 74.4,
  _original_height: 71.6,
}

export function MediaPool(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MEDIA_POOL)} />
}
