import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SECURITY_CENTER = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Security_Center.svg;',
  _width: 36,
  _height: 50,
}

export function SecurityCenter(props: DiagramNodeProps) {
  return <Shape {...SECURITY_CENTER} {...props} />
}
