import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SALES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/Sales.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function Sales(props: DiagramNodeProps) {
  return <Shape {...SALES} {...props} />
}
