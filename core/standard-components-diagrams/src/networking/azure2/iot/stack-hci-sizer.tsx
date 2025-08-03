import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STACK_HCI_SIZER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/iot/Azure_Stack_HCI_Sizer.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function StackHciSizer(props: DiagramNodeProps) {
  return <Shape {...STACK_HCI_SIZER} {...props} />
}
