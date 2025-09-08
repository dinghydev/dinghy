import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMMENT = {
  _style: {
    entity:
      'shape=note;size=15;align=left;spacingLeft=10;html=1;whiteSpace=wrap;',
  },
  _original_width: 180,
  _original_height: 80,
}

export function Comment(props: DiagramNodeProps) {
  return <Shape {...COMMENT} {...props} _style={extendStyle(COMMENT, props)} />
}
