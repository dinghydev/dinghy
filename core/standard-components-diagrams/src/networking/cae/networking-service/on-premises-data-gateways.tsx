import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ON_PREMISES_DATA_GATEWAYS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/On_Premises_Data_Gateways.svg;strokeColor=none;',
  _width: 50,
  _height: 50,
}

export function OnPremisesDataGateways(props: DiagramNodeProps) {
  return <Shape {...ON_PREMISES_DATA_GATEWAYS} {...props} />
}
