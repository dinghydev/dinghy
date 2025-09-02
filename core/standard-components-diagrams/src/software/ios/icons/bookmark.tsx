import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BOOKMARK = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.bookmark;',
  },
  _original_width: 18,
  _original_height: 24,
}

export function Bookmark(props: DiagramNodeProps) {
  return (
    <Shape {...BOOKMARK} {...props} _style={extendStyle(BOOKMARK, props)} />
  )
}
