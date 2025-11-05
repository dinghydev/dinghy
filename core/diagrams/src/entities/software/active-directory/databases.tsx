import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATABASES = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/databases.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 49,
}

export function Databases(props: NodeProps) {
  return (
    <Shape {...DATABASES} {...props} _style={extendStyle(DATABASES, props)} />
  )
}
