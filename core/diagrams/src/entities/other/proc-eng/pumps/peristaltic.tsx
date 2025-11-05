import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PERISTALTIC = {
  _style: {
    entity:
      'shape=mxgraph.pid.pumps.peristaltic;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 60,
  _original_height: 69,
}

export function Peristaltic(props: NodeProps) {
  return (
    <Shape
      {...PERISTALTIC}
      {...props}
      _style={extendStyle(PERISTALTIC, props)}
    />
  )
}
