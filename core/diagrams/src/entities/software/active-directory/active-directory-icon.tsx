import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ACTIVE_DIRECTORY_ICON = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/active_directory.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 42.5,
}

export function ActiveDirectoryIcon(props: DiagramNodeProps) {
  return (
    <Shape
      {...ACTIVE_DIRECTORY_ICON}
      {...props}
      _style={extendStyle(ACTIVE_DIRECTORY_ICON, props)}
    />
  )
}
