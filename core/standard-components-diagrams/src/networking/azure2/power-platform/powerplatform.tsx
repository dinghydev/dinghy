import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const POWERPLATFORM = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/power_platform/PowerPlatform.svg;strokeColor=none;',
  _width: 64.32,
  _height: 68,
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
