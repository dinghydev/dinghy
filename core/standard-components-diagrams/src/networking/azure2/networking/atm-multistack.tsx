import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ATM_MULTISTACK = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/ATM_Multistack.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function AtmMultistack(props: DiagramNodeProps) {
  return (
    <Shape
      {...ATM_MULTISTACK}
      {...props}
      _style={extendStyle(ATM_MULTISTACK, props)}
    />
  )
}
