import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CUSTOMER_LOCKBOX = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Customer_Lockbox.svg;strokeColor=none;',
  _width: 47,
  _height: 50,
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
