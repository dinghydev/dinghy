import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TURBO_DRIER_DISC_DRIER_MOVING_SHELF_DRIER = {
  _style: {
    entity:
      'shape=mxgraph.pid.driers.turbo_drier,_disc_drier,_moving_shelf_drier;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 100,
  _height: 140,
}

export function TurboDrierDiscDrierMovingShelfDrier(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, TURBO_DRIER_DISC_DRIER_MOVING_SHELF_DRIER)}
    />
  )
}
