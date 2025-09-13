import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BOOKMARK = {
  _style: {
    entity:
      'html=1;dashed=0;aspect=fixed;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.bookmark;strokeColor=none;fillColor=#737373;shadow=0;sketch=0;',
  },
  _width: 12,
  _height: 20,
}

export function Bookmark(props: DiagramNodeProps) {
  return (
    <Shape {...BOOKMARK} {...props} _style={extendStyle(BOOKMARK, props)} />
  )
}
