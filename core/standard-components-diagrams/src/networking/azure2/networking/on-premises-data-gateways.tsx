import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ON_PREMISES_DATA_GATEWAYS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/On_Premises_Data_Gateways.svg;strokeColor=none;',
  _width: 68,
  _height: 65.2,
}

export function OnPremisesDataGateways(props: DiagramNodeProps) {
  return (
    <Shape
      {...ON_PREMISES_DATA_GATEWAYS}
      {...props}
      _style={extendStyle(ON_PREMISES_DATA_GATEWAYS, props)}
    />
  )
}
