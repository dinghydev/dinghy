import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMMERCE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/Commerce.svg;strokeColor=none;',
  _width: 68,
  _height: 59.519999999999996,
}

export function Commerce(props: DiagramNodeProps) {
  return <Shape {...COMMERCE} {...props} />
}
