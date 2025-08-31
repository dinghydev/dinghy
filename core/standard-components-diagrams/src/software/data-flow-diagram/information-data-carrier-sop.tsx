import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INFORMATION_DATA_CARRIER_SOP = {
  _style: {
    entity:
      'shape=document;whiteSpace=wrap;html=1;boundedLbl=1;dashed=0;flipH=1;',
  },
  _width: 100,
  _height: 70,
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
