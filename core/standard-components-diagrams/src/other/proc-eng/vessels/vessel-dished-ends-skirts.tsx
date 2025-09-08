import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VESSEL_DISHED_ENDS_SKIRTS = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.vessel_(dished_ends,_skirts);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 40,
  _original_height: 122,
}

export function VesselDishedEndsSkirts(props: DiagramNodeProps) {
  return (
    <Shape
      {...VESSEL_DISHED_ENDS_SKIRTS}
      {...props}
      _style={extendStyle(VESSEL_DISHED_ENDS_SKIRTS, props)}
    />
  )
}
