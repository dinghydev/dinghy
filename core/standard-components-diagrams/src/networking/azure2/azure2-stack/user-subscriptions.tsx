import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const USER_SUBSCRIPTIONS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/azure_stack/User_Subscriptions.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 66,
}

export function UserSubscriptions(props: DiagramNodeProps) {
  return (
    <Shape
      {...USER_SUBSCRIPTIONS}
      {...props}
      _style={extendStyle(USER_SUBSCRIPTIONS, props)}
    />
  )
}
