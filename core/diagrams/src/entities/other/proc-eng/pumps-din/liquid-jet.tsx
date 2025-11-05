import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LIQUID_JET = {
  _style: {
    entity:
      'shape=mxgraph.pid.pumps_-_din.liquid_jet;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function LiquidJet(props: NodeProps) {
  return (
    <Shape {...LIQUID_JET} {...props} _style={extendStyle(LIQUID_JET, props)} />
  )
}
