import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INFORMATION_DATA_CARRIER_SOP_STOP_STATE = {
  _style: {
    entity: 'triangle;whiteSpace=wrap;html=1;dashed=0;direction=south;',
  },
  _width: 60,
  _height: 60,
}

export function InformationDataCarrierSopStopState(props: DiagramNodeProps) {
  return (
    <Shape
      {...INFORMATION_DATA_CARRIER_SOP_STOP_STATE}
      {...props}
      _style={extendStyle(INFORMATION_DATA_CARRIER_SOP_STOP_STATE, props)}
    />
  )
}
