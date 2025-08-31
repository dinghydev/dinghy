import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RESOURCE_MOVER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Resource_Mover.svg;strokeColor=none;',
  },
  _width: 56.00000000000001,
  _height: 68,
}

export function ResourceMover(props: DiagramNodeProps) {
  return (
    <Shape
      {...RESOURCE_MOVER}
      {...props}
      _style={extendStyle(RESOURCE_MOVER, props)}
    />
  )
}
