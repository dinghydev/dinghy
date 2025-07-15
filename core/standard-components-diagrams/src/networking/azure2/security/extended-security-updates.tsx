import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EXTENDED_SECURITY_UPDATES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/security/ExtendedSecurityUpdates.svg;',
  _width: 64,
  _height: 70,
}

export function ExtendedSecurityUpdates(props: DiagramNodeProps) {
  return <Shape {...EXTENDED_SECURITY_UPDATES} {...props} />
}
