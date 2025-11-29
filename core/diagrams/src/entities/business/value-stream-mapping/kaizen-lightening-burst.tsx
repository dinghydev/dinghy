import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const KAIZEN_LIGHTENING_BURST = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.kaizen_lightening_burst;',
  },
  _width: 0,
  _height: 40,
}

export function KaizenLighteningBurst(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, KAIZEN_LIGHTENING_BURST)} />
  )
}
