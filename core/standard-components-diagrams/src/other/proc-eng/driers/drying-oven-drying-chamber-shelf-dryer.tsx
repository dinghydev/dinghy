import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DRYING_OVEN_DRYING_CHAMBER_SHELF_DRYER = {
  _style: {
    entity:
      'shape=mxgraph.pid.driers.drying_oven,_drying_chamber,_shelf_dryer;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 140,
}

export function DryingOvenDryingChamberShelfDryer(props: DiagramNodeProps) {
  return (
    <Shape
      {...DRYING_OVEN_DRYING_CHAMBER_SHELF_DRYER}
      {...props}
      _style={extendStyle(DRYING_OVEN_DRYING_CHAMBER_SHELF_DRYER, props)}
    />
  )
}
