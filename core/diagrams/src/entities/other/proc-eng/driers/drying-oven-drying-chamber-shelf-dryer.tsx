import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DRYING_OVEN_DRYING_CHAMBER_SHELF_DRYER = {
  _style: {
    entity:
      'shape=mxgraph.pid.driers.drying_oven,_drying_chamber,_shelf_dryer;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 100,
  _height: 140,
}

export function DryingOvenDryingChamberShelfDryer(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, DRYING_OVEN_DRYING_CHAMBER_SHELF_DRYER)}
    />
  )
}
