import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HANDLE_WITH_CARE = {
  _style: {
    entity:
      'shape=mxgraph.signs.safety.handle_with_care;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 91,
  _original_height: 99,
}

export function HandleWithCare(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, HANDLE_WITH_CARE)} />
}
