import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLOUD_MESSAGING = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/infrastructure/cloud_messaging.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function CloudMessaging(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CLOUD_MESSAGING)} />
}
