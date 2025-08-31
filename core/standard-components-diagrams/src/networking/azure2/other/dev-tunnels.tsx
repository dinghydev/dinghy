import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEV_TUNNELS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Dev_Tunnels.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
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
