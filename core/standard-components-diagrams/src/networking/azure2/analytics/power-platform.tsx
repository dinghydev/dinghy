import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const POWER_PLATFORM = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/analytics/Power_Platform.svg;',
  _width: 64.92,
  _height: 68,
}

export function PowerPlatform(props: DiagramNodeProps) {
  return <Shape {...POWER_PLATFORM} {...props} />
}
