import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INTERFACE = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/interface.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 23.5,
}

export function Interface(props: DiagramNodeProps) {
  return (
    <Shape {...INTERFACE} {...props} _style={extendStyle(INTERFACE, props)} />
  )
}
