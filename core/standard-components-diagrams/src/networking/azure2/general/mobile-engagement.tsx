import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MOBILE_ENGAGEMENT = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Mobile_Engagement.svg;',
  _width: 40,
  _height: 67,
}

export function MobileEngagement(props: DiagramNodeProps) {
  return <Shape {...MOBILE_ENGAGEMENT} {...props} />
}
