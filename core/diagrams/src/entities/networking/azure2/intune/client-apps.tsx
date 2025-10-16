import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLIENT_APPS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/intune/Client_Apps.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function ClientApps(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLIENT_APPS}
      {...props}
      _style={extendStyle(CLIENT_APPS, props)}
    />
  )
}
