import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EXTENSION = {
  _style: {
    entity:
      'endArrow=block;html=1;endFill=1;edgeStyle=none;endSize=12;labelBackgroundColor=none;align=left;',
  },
  _original_width: 2,
  _original_height: 180,
}

export function Extension(props: DiagramNodeProps) {
  return (
    <Shape {...EXTENSION} {...props} _style={extendStyle(EXTENSION, props)} />
  )
}
