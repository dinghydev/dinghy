import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LIST = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/list.svg;strokeColor=none;',
  },
  _original_width: 35,
  _original_height: 50,
}

export function List(props: DiagramNodeProps) {
  return <Shape {...LIST} {...props} _style={extendStyle(LIST, props)} />
}
