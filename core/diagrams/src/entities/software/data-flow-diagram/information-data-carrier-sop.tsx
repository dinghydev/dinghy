import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INFORMATION_DATA_CARRIER_SOP = {
  _style: {
    entity:
      'shape=document;whiteSpace=wrap;html=1;boundedLbl=1;dashed=0;flipH=1;',
  },
  _width: 100,
  _height: 70,
}

export function InformationDataCarrierSop(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, INFORMATION_DATA_CARRIER_SOP)}
    />
  )
}
