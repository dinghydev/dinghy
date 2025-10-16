import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DEV_TUNNELS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Dev_Tunnels.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function DevTunnels(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEV_TUNNELS}
      {...props}
      _style={extendStyle(DEV_TUNNELS, props)}
    />
  )
}
