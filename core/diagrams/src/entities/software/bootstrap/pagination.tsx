import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PAGINATION = {
  _style: {
    entity:
      'swimlane;shape=mxgraph.bootstrap.anchor;strokeColor=#DEE2E6;fillColor=#ffffff;fontColor=#0085FC;fontStyle=0;childLayout=stackLayout;horizontal=0;startSize=0;horizontalStack=1;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;whiteSpace=wrap;html=1;',
  },
  _width: 0,
  _height: 30,
}

export function Pagination(props: DiagramNodeProps) {
  return (
    <Shape {...PAGINATION} {...props} _style={extendStyle(PAGINATION, props)} />
  )
}
