import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SQUIB_IGNITOR = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.squib_ignitor',
  },
  _original_width: 100,
  _original_height: 100,
}

export function SquibIgnitor(props: NodeProps) {
  return (
    <Shape
      {...SQUIB_IGNITOR}
      {...props}
      _style={extendStyle(SQUIB_IGNITOR, props)}
    />
  )
}
