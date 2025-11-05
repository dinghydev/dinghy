import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPOSITION = {
  _style: {
    dependency:
      'html=1;labelBackgroundColor=#ffffff;jettySize=auto;orthogonalLoop=1;fontSize=14;rounded=0;jumpStyle=gap;edgeStyle=orthogonalEdgeStyle;startArrow=diamond;startFill=1;endArrow=open;strokeWidth=1;',
  },
}

export function Composition(props: NodeProps) {
  return (
    <Dependency
      {...COMPOSITION}
      {...props}
      _style={extendStyle(COMPOSITION, props)}
    />
  )
}
