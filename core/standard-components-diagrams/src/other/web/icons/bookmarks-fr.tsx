import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BOOKMARKS_FR = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.bookmarks.fr;fillColor=#F9FAF4;gradientColor=#DCDFBB',
  },
  _width: 102.4,
  _height: 102.4,
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
