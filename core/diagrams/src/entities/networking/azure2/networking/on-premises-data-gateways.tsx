import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ON_PREMISES_DATA_GATEWAYS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/On_Premises_Data_Gateways.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 65.2,
}

export function OnPremisesDataGateways(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, ON_PREMISES_DATA_GATEWAYS)} />
  )
}
