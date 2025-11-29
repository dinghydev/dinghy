import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GLOBAL_SECONDARY_INDEX = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.global_secondary_index;fillColor=#2E73B8;gradientColor=none;',
  },
  _original_width: 67.5,
  _original_height: 66,
}

export function GlobalSecondaryIndex(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, GLOBAL_SECONDARY_INDEX)} />
  )
}
