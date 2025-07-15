import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const USER = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Person.svg;',
  _width: 37,
  _height: 50,
}

export function User(props: DiagramNodeProps) {
  return <Shape {...USER} {...props} />
}
