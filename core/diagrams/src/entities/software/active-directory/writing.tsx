import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WRITING = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/writing.svg;strokeColor=none;',
  },
  _original_width: 49,
  _original_height: 50,
}

export function Writing(props: DiagramNodeProps) {
  return <Shape {...WRITING} {...props} _style={extendStyle(WRITING, props)} />
}
