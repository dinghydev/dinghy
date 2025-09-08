import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INFORMATION_DATA_CARRIER_SOP = {
  _style: {
    entity:
      'shape=document;whiteSpace=wrap;html=1;boundedLbl=1;dashed=0;flipH=1;',
  },
  _original_width: 100,
  _original_height: 70,
}

export function InformationDataCarrierSop(props: DiagramNodeProps) {
  return (
    <Shape
      {...INFORMATION_DATA_CARRIER_SOP}
      {...props}
      _style={extendStyle(INFORMATION_DATA_CARRIER_SOP, props)}
    />
  )
}
