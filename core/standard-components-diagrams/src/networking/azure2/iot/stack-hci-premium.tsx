import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STACK_HCI_PREMIUM = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/iot/Stack_HCI_Premium.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function StackHciPremium(props: DiagramNodeProps) {
  return (
    <Shape
      {...STACK_HCI_PREMIUM}
      {...props}
      _style={extendStyle(STACK_HCI_PREMIUM, props)}
    />
  )
}
