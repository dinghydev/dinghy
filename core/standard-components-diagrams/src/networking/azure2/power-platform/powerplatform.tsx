import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const POWERPLATFORM = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/power_platform/PowerPlatform.svg;strokeColor=none;',
  },
  _original_width: 64.32,
  _original_height: 68,
}

export function Powerplatform(props: DiagramNodeProps) {
  return (
    <Shape
      {...POWERPLATFORM}
      {...props}
      _style={extendStyle(POWERPLATFORM, props)}
    />
  )
}
