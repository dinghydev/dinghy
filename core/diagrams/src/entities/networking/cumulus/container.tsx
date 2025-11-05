import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONTAINER = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;fontSize=12;verticalAlign=top;fontColor=#364149;shadow=0;dashed=0;image=img/lib/cumulus/container.svg;strokeColor=none;',
  },
  _original_width: 90,
  _original_height: 80,
}

export function Container(props: NodeProps) {
  return (
    <Shape {...CONTAINER} {...props} _style={extendStyle(CONTAINER, props)} />
  )
}
