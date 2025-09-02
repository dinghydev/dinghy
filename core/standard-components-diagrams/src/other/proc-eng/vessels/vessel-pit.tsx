import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VESSEL_PIT = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.vessel_(pit);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 95,
  _original_height: 55,
}

export function VesselPit(props: DiagramNodeProps) {
  return (
    <Shape {...VESSEL_PIT} {...props} _style={extendStyle(VESSEL_PIT, props)} />
  )
}
