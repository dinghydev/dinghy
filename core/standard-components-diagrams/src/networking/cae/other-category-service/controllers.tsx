import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTROLLERS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Controllers.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 44,
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
