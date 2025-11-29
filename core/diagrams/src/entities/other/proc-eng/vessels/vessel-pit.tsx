import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VESSEL_PIT = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.vessel_(pit);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 95,
  _height: 55,
}

export function VesselPit(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VESSEL_PIT)} />
}
