import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EXCHANGE_ON_PREMISES_ACCESS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Exchange_On_premises_Access.svg;strokeColor=none;',
  },
  _original_width: 28.999999999999996,
  _original_height: 50,
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
