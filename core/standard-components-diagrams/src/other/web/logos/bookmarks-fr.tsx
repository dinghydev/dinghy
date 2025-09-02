import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BOOKMARKS_FR = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.bookmarks.fr',
  },
  _original_width: 70.2,
  _original_height: 62.800000000000004,
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
