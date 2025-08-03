import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const USER_SUBSCRIPTIONS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/azure_stack/User_Subscriptions.svg;strokeColor=none;',
  _width: 68,
  _height: 66,
}

export function UserSubscriptions(props: DiagramNodeProps) {
  return <Shape {...USER_SUBSCRIPTIONS} {...props} />
}
