import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CALL_CHOREOGRAPHY_CALLING_GLOBAL = {
  _style: {
    container:
      'rounded=1;whiteSpace=wrap;html=1;container=1;collapsible=0;absoluteArcSize=1;arcSize=20;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;strokeWidth=8;',
  },
}

export function CallChoreographyCallingGlobal(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, CALL_CHOREOGRAPHY_CALLING_GLOBAL)}
    />
  )
}
