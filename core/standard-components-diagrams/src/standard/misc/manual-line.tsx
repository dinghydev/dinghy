import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MANUAL_LINE = {
  _style: {
    dependency:
      'edgeStyle=segmentEdgeStyle;endArrow=classic;html=1;curved=0;rounded=0;endSize=8;startSize=8;',
  },
}

export function ManualLine(props: DiagramNodeProps) {
  return (
    <Dependency
      {...MANUAL_LINE}
      {...props}
      _style={extendStyle(MANUAL_LINE, props)}
    />
  )
}
