import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MAPS_ACCOUNTS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/iot/Azure_Maps_Accounts.svg;',
  _width: 68,
  _height: 68,
}

export function MapsAccounts(props: DiagramNodeProps) {
  return <Shape {...MAPS_ACCOUNTS} {...props} />
}
