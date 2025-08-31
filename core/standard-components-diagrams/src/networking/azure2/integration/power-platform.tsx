import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const POWER_PLATFORM = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/analytics/Power_Platform.svg;strokeColor=none;',
  _width: 64.92,
  _height: 68,
}

export function PowerPlatform(props: DiagramNodeProps) {
  return (
    <Shape
      {...POWER_PLATFORM}
      {...props}
      _style={extendStyle(POWER_PLATFORM, props)}
    />
  )
}
