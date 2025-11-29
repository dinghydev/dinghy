import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MY_CUSTOMERS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/My_Customers.svg;strokeColor=none;',
  },
  _original_width: 69,
  _original_height: 56.00000000000001,
}

export function MyCustomers(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MY_CUSTOMERS)} />
}
