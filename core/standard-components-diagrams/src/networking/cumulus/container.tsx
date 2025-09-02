import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTAINER = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;fontSize=12;verticalAlign=top;fontColor=#364149;shadow=0;dashed=0;image=img/lib/cumulus/container.svg;strokeColor=none;',
  },
  _original_width: 90,
  _original_height: 80,
}

export function Container(props: DiagramNodeProps) {
  return (
    <Shape {...CONTAINER} {...props} _style={extendStyle(CONTAINER, props)} />
  )
}
