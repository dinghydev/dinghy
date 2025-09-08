import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NOTIFICATION = {
  _style: {
    entity:
      'html=1;strokeWidth=1;shadow=0;dashed=0;shape=mxgraph.ios7.misc.notification;fillColor=#FF3B2F;strokeColor=none;buttonText=;strokeColor2=#222222;fontColor=#222222;fontSize=8;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 15,
  _original_height: 15,
}

export function Notification(props: DiagramNodeProps) {
  return (
    <Shape
      {...NOTIFICATION}
      {...props}
      _style={extendStyle(NOTIFICATION, props)}
    />
  )
}
