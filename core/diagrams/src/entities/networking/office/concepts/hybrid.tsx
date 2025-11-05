import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HYBRID = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.hybrid;',
  },
  _original_width: 58,
  _original_height: 52,
}

export function Hybrid(props: NodeProps) {
  return <Shape {...HYBRID} {...props} _style={extendStyle(HYBRID, props)} />
}
