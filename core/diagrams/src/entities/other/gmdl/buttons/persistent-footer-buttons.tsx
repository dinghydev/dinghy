import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PERSISTENT_FOOTER_BUTTONS = {
  _style: {
    entity:
      'swimlane;shape=rect;strokeColor=#EEEEEE;fillColor=#ffffff;fontColor=#2196F3;fontStyle=0;childLayout=stackLayout;horizontal=0;startSize=0;horizontalStack=1;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;whiteSpace=wrap;html=1;',
  },
  _width: 0,
  _height: 40,
}

export function PersistentFooterButtons(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, PERSISTENT_FOOTER_BUTTONS)} />
  )
}
