import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INFORMATION_DATA_CARRIER_SOP_STOP_STATE = {
  _style: 'triangle;whiteSpace=wrap;html=1;dashed=0;direction=south;',
  _width: 60,
  _height: 60,
}

export function InformationDataCarrierSopStopState(props: DiagramNodeProps) {
  return <Shape {...INFORMATION_DATA_CARRIER_SOP_STOP_STATE} {...props} />
}
