import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TURBO_DRIER_DISC_DRIER_MOVING_SHELF_DRIER = {
  _style:
    'shape=mxgraph.pid.driers.turbo_drier,_disc_drier,_moving_shelf_drier;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 140,
}

export function TurboDrierDiscDrierMovingShelfDrier(props: DiagramNodeProps) {
  return (
    <Shape
      {...TURBO_DRIER_DISC_DRIER_MOVING_SHELF_DRIER}
      {...props}
      _style={extendStyle(TURBO_DRIER_DISC_DRIER_MOVING_SHELF_DRIER, props)}
    />
  )
}
