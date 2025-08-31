import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ACTIVE_DIRECTORY = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/active_directory.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 42.5,
}

export function ActiveDirectory(props: DiagramNodeProps) {
  return (
    <Shape
      {...ACTIVE_DIRECTORY}
      {...props}
      _style={extendStyle(ACTIVE_DIRECTORY, props)}
    />
  )
}
