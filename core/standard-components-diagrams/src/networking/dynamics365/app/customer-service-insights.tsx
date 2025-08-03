import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CUSTOMER_SERVICE_INSIGHTS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/CustomerServiceInsights.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function CustomerServiceInsights(props: DiagramNodeProps) {
  return <Shape {...CUSTOMER_SERVICE_INSIGHTS} {...props} />
}
