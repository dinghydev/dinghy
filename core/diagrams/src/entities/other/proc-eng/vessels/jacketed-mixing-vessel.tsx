import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const JACKETED_MIXING_VESSEL = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.jacketed_mixing_vessel;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 100,
  _height: 174,
}

export function JacketedMixingVessel(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, JACKETED_MIXING_VESSEL)} />
  )
}
