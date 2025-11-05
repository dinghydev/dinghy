import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLAMPED_FLANGE_COUPLING = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.clamped_flange_coupling;',
  },
  _width: 50,
  _height: 100,
}

export function ClampedFlangeCoupling(props: NodeProps) {
  return (
    <Shape
      {...CLAMPED_FLANGE_COUPLING}
      {...props}
      _style={extendStyle(CLAMPED_FLANGE_COUPLING, props)}
    />
  )
}
