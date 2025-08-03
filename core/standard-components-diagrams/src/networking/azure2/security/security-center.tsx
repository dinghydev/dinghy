import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SECURITY_CENTER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/security/Security_Center.svg;strokeColor=none;',
  _width: 56.00000000000001,
  _height: 68,
}

export function SecurityCenter(props: DiagramNodeProps) {
  return <Shape {...SECURITY_CENTER} {...props} />
}
