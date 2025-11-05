import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const APP_CONFIGURATION = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/integration/App_Configuration.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 68,
}

export function AppConfiguration(props: NodeProps) {
  return (
    <Shape
      {...APP_CONFIGURATION}
      {...props}
      _style={extendStyle(APP_CONFIGURATION, props)}
    />
  )
}
