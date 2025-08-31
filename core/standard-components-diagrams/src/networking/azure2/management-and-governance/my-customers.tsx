import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MY_CUSTOMERS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/My_Customers.svg;strokeColor=none;',
  _width: 69,
  _height: 56.00000000000001,
}

export function MyCustomers(props: DiagramNodeProps) {
  return (
    <Shape
      {...MY_CUSTOMERS}
      {...props}
      _style={extendStyle(MY_CUSTOMERS, props)}
    />
  )
}
