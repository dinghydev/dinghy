import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EXCHANGE_ON_PREMISES_ACCESS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Exchange_On_premises_Access.svg;strokeColor=none;',
  },
  _width: 28.999999999999996,
  _height: 50,
}

export function ExchangeOnPremisesAccess(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, EXCHANGE_ON_PREMISES_ACCESS)}
    />
  )
}
