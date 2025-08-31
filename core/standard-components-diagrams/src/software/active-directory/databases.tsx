import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATABASES = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/databases.svg;strokeColor=none;',
  _width: 50,
  _height: 49,
}

export function Databases(props: DiagramNodeProps) {
  return (
    <Shape {...DATABASES} {...props} _style={extendStyle(DATABASES, props)} />
  )
}
