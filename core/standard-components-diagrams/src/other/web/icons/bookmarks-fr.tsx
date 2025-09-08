import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BOOKMARKS_FR = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.bookmarks.fr;fillColor=#F9FAF4;gradientColor=#DCDFBB',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function BookmarksFr(props: DiagramNodeProps) {
  return (
    <Shape
      {...BOOKMARKS_FR}
      {...props}
      _style={extendStyle(BOOKMARKS_FR, props)}
    />
  )
}
