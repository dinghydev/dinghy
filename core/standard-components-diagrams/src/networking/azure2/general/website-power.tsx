import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WEBSITE_POWER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Website_Power.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
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
