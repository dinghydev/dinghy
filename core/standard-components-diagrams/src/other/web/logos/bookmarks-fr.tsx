import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BOOKMARKS_FR = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.bookmarks.fr',
  _width: 70.2,
  _height: 62.800000000000004,
}

export function BookmarksFr(props: DiagramNodeProps) {
  return <Shape {...BOOKMARKS_FR} {...props} />
}
