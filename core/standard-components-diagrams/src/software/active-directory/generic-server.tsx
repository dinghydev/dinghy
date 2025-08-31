import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GENERIC_SERVER = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/generic_server.svg;strokeColor=none;',
  },
  _width: 28.000000000000004,
  _height: 50,
}

export function GenericServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...GENERIC_SERVER}
      {...props}
      _style={extendStyle(GENERIC_SERVER, props)}
    />
  )
}
