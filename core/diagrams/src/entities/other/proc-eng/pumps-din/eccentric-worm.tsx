import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ECCENTRIC_WORM = {
  _style: {
    entity:
      'shape=mxgraph.pid.pumps_-_din.eccentric_worm;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function EccentricWorm(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ECCENTRIC_WORM)} />
}
