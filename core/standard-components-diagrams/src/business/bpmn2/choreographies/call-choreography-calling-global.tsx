import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CALL_CHOREOGRAPHY_CALLING_GLOBAL = {
  _style: {
    group:
      'rounded=1;whiteSpace=wrap;html=1;container=1;collapsible=0;absoluteArcSize=1;arcSize=20;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;strokeWidth=8;',
  },
}

export function CallChoreographyCallingGlobal(props: DiagramNodeProps) {
  return <Shape {...CALL_CHOREOGRAPHY_CALLING_GLOBAL} {...props} />
}
