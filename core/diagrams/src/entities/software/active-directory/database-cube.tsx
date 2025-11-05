import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATABASE_CUBE = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/database_cube.svg;strokeColor=none;',
  },
  _original_width: 45,
  _original_height: 50,
}

export function DatabaseCube(props: NodeProps) {
  return (
    <Shape
      {...DATABASE_CUBE}
      {...props}
      _style={extendStyle(DATABASE_CUBE, props)}
    />
  )
}
