import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLAMPED_FLANGE_COUPLING = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.clamped_flange_coupling;',
  _width: 50,
  _height: 100,
}

export function ClampedFlangeCoupling(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLAMPED_FLANGE_COUPLING}
      {...props}
      _style={extendStyle(CLAMPED_FLANGE_COUPLING, props)}
    />
  )
}
