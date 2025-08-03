import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CUSTOMER_INSIGHTS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/CustomerInsights.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function CustomerInsights(props: DiagramNodeProps) {
  return <Shape {...CUSTOMER_INSIGHTS} {...props} />
}
