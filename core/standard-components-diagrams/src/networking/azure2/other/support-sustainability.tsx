import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SUPPORT_SUSTAINABILITY = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Sustainability.svg;',
  _width: 68,
  _height: 68,
}

export function SupportSustainability(props: DiagramNodeProps) {
  return <Shape {...SUPPORT_SUSTAINABILITY} {...props} />
}
