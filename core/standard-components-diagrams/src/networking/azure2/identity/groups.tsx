import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GROUPS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Groups.svg;',
  _width: 68,
  _height: 56.00000000000001,
}

export function Groups(props: DiagramNodeProps) {
  return <Shape {...GROUPS} {...props} />
}
