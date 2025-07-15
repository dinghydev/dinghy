import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MARKETING = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/Marketing.svg;',
  _width: 68,
  _height: 68,
}

export function Marketing(props: DiagramNodeProps) {
  return <Shape {...MARKETING} {...props} />
}
