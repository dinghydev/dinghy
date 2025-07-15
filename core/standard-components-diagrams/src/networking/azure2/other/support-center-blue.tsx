import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SUPPORT_CENTER_BLUE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Support_Center_Blue.svg;',
  _width: 60,
  _height: 68,
}

export function SupportCenterBlue(props: DiagramNodeProps) {
  return <Shape {...SUPPORT_CENTER_BLUE} {...props} />
}
