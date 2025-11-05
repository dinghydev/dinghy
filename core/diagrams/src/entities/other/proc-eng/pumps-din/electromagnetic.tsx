import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ELECTROMAGNETIC = {
  _style: {
    entity:
      'shape=mxgraph.pid.pumps_-_din.electromagnetic;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Electromagnetic(props: NodeProps) {
  return (
    <Shape
      {...ELECTROMAGNETIC}
      {...props}
      _style={extendStyle(ELECTROMAGNETIC, props)}
    />
  )
}
