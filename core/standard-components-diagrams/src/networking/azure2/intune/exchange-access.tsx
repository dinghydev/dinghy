import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EXCHANGE_ACCESS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/intune/Exchange_Access.svg;',
  _width: 56.00000000000001,
  _height: 68,
}

export function ExchangeAccess(props: DiagramNodeProps) {
  return <Shape {...EXCHANGE_ACCESS} {...props} />
}
