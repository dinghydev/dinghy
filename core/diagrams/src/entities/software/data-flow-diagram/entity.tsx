import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ENTITY = {
  _style: {
    entity:
      'swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=20;fillColor=#ffffff;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;swimlaneFillColor=#ffffff;',
  },
  _width: 100,
  _height: 50,
}

export function Entity(props: NodeProps) {
  return <Shape {...ENTITY} {...props} _style={extendStyle(ENTITY, props)} />
}
