import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CUSTOMER_SERVICE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/CustomerService.svg;strokeColor=none;',
  _width: 68,
  _height: 59.519999999999996,
}

export function CustomerService(props: DiagramNodeProps) {
  return (
    <Shape
      {...CUSTOMER_SERVICE}
      {...props}
      _style={extendStyle(CUSTOMER_SERVICE, props)}
    />
  )
}
