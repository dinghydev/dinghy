import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INTEGRATION = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.integration;',
  },
  _original_width: 44,
  _original_height: 43,
}

export function Integration(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, INTEGRATION)} />
}
