import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CUSTOMER_LOCKBOX = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Customer_Lockbox.svg;strokeColor=none;',
  },
  _original_width: 47,
  _original_height: 50,
}

export function CustomerLockbox(props: DiagramNodeProps) {
  return (
    <Shape
      {...CUSTOMER_LOCKBOX}
      {...props}
      _style={extendStyle(CUSTOMER_LOCKBOX, props)}
    />
  )
}
