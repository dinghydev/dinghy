import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WRITER = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/writer.svg;strokeColor=none;',
  },
  _original_width: 48,
  _original_height: 50,
}

export function Writer(props: NodeProps) {
  return <Shape {...WRITER} {...props} _style={extendStyle(WRITER, props)} />
}
