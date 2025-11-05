import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMMENT = {
  _style: {
    entity:
      'shape=note;size=15;align=left;spacingLeft=10;html=1;whiteSpace=wrap;',
  },
  _width: 180,
  _height: 80,
}

export function Comment(props: NodeProps) {
  return <Shape {...COMMENT} {...props} _style={extendStyle(COMMENT, props)} />
}
