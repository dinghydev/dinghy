import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FULL_MS_INTEGRATION = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.full_ms_integration;',
  },
  _original_width: 44.8,
  _original_height: 44.8,
}

export function FullMsIntegration(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FULL_MS_INTEGRATION)} />
}
