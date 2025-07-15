import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EXCHANGE_ON_PREMISES_ACCESS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Exchange_On_premises_Access.svg;',
  _width: 28.999999999999996,
  _height: 50,
}

export function ExchangeOnPremisesAccess(props: DiagramNodeProps) {
  return <Shape {...EXCHANGE_ON_PREMISES_ACCESS} {...props} />
}
