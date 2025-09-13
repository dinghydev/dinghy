import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EXCHANGE_ON_PREMISES_ACCESS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Exchange_On_Premises_Access.svg;strokeColor=none;',
  },
  _width: 40,
  _height: 68,
}

export function ExchangeOnPremisesAccess(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXCHANGE_ON_PREMISES_ACCESS}
      {...props}
      _style={extendStyle(EXCHANGE_ON_PREMISES_ACCESS, props)}
    />
  )
}
