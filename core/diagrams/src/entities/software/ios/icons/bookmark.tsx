import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BOOKMARK = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.bookmark;',
  },
  _width: 18,
  _height: 24,
}

export function Bookmark(props: NodeProps) {
  return (
    <Shape {...BOOKMARK} {...props} _style={extendStyle(BOOKMARK, props)} />
  )
}
