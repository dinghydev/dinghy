import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const APP_REGISTRATIONS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/App_Registrations.svg;strokeColor=none;',
  },
  _original_width: 63,
  _original_height: 64,
}

export function AppRegistrations(props: NodeProps) {
  return (
    <Shape
      {...APP_REGISTRATIONS}
      {...props}
      _style={extendStyle(APP_REGISTRATIONS, props)}
    />
  )
}
