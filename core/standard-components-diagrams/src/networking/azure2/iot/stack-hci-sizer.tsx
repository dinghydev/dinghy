import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STACK_HCI_SIZER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/iot/Azure_Stack_HCI_Sizer.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function StackHciSizer(props: DiagramNodeProps) {
  return (
    <Shape
      {...STACK_HCI_SIZER}
      {...props}
      _style={extendStyle(STACK_HCI_SIZER, props)}
    />
  )
}
