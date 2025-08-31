import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const USER = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Person.svg;strokeColor=none;',
  },
  _width: 37,
  _height: 50,
}

export function User(props: DiagramNodeProps) {
  return <Shape {...USER} {...props} _style={extendStyle(USER, props)} />
}
