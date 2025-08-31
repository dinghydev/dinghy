import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUPPORT_CENTER_BLUE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Support_Center_Blue.svg;strokeColor=none;',
  _width: 60,
  _height: 68,
}

export function SupportCenterBlue(props: DiagramNodeProps) {
  return (
    <Shape
      {...SUPPORT_CENTER_BLUE}
      {...props}
      _style={extendStyle(SUPPORT_CENTER_BLUE, props)}
    />
  )
}
