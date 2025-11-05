import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SUPPORT_SKIRT = {
  _style: {
    entity:
      'shape=mxgraph.pid.apparatus_elements.support_skirt;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function SupportSkirt(props: NodeProps) {
  return (
    <Shape
      {...SUPPORT_SKIRT}
      {...props}
      _style={extendStyle(SUPPORT_SKIRT, props)}
    />
  )
}
