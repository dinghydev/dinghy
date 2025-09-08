import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const POWER_PLATFORM = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/analytics/Power_Platform.svg;strokeColor=none;',
  },
  _original_width: 64.92,
  _original_height: 68,
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
