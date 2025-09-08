import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CHOREOGRAPHY_TASK = {
  _style: {
    group:
      'rounded=1;whiteSpace=wrap;html=1;container=1;collapsible=0;absoluteArcSize=1;arcSize=20;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;',
  },
}

export function ChoreographyTask(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHOREOGRAPHY_TASK}
      {...props}
      _style={extendStyle(CHOREOGRAPHY_TASK, props)}
    />
  )
}
