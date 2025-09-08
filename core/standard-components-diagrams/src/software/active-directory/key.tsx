import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const KEY = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/key.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 37,
}

export function Key(props: DiagramNodeProps) {
  return <Shape {...KEY} {...props} _style={extendStyle(KEY, props)} />
}
