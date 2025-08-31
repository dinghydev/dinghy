import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WEBSITE_POWER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Website_Power.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function WebsitePower(props: DiagramNodeProps) {
  return (
    <Shape
      {...WEBSITE_POWER}
      {...props}
      _style={extendStyle(WEBSITE_POWER, props)}
    />
  )
}
