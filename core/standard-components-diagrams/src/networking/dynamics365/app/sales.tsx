import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SALES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/Sales.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Sales(props: DiagramNodeProps) {
  return <Shape {...SALES} {...props} _style={extendStyle(SALES, props)} />
}
