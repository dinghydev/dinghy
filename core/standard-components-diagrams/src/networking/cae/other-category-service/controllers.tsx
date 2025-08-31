import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTROLLERS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Controllers.svg;strokeColor=none;',
  _width: 50,
  _height: 44,
}

export function Controllers(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTROLLERS}
      {...props}
      _style={extendStyle(CONTROLLERS, props)}
    />
  )
}
