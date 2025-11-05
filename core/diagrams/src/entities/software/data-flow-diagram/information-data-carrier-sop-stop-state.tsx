import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INFORMATION_DATA_CARRIER_SOP_STOP_STATE = {
  _style: {
    entity: 'triangle;whiteSpace=wrap;html=1;dashed=0;direction=south;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function InformationDataCarrierSopStopState(props: NodeProps) {
  return (
    <Shape
      {...INFORMATION_DATA_CARRIER_SOP_STOP_STATE}
      {...props}
      _style={extendStyle(INFORMATION_DATA_CARRIER_SOP_STOP_STATE, props)}
    />
  )
}
