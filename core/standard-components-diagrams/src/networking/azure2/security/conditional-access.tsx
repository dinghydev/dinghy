import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONDITIONAL_ACCESS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/security/Conditional_Access.svg;strokeColor=none;',
  },
  _original_width: 56.00000000000001,
  _original_height: 68,
}

export function ConditionalAccess(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONDITIONAL_ACCESS}
      {...props}
      _style={extendStyle(CONDITIONAL_ACCESS, props)}
    />
  )
}
