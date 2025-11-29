import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AGITATOR_CROSS_BEAM = {
  _style: {
    entity:
      'shape=mxgraph.pid.agitators.agitator_(cross-beam);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 80,
  _height: 120,
}

export function AgitatorCrossBeam(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, AGITATOR_CROSS_BEAM)} />
}
