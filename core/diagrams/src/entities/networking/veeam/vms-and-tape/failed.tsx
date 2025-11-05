import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FAILED = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.failed;',
  },
  _original_width: 36,
  _original_height: 36,
}

export function Failed(props: NodeProps) {
  return <Shape {...FAILED} {...props} _style={extendStyle(FAILED, props)} />
}
