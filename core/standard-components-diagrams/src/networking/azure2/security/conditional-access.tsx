import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONDITIONAL_ACCESS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/security/Conditional_Access.svg;strokeColor=none;',
  _width: 56.00000000000001,
  _height: 68,
}

export function ConditionalAccess(props: DiagramNodeProps) {
  return <Shape {...CONDITIONAL_ACCESS} {...props} />
}
