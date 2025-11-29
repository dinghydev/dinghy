import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DASHED_CONNECTOR_SINGLE_ARROW = {
  _style: {
    dependency:
      'html=1;labelBackgroundColor=#ffffff;startArrow=none;startFill=0;startSize=6;endArrow=classic;endFill=1;endSize=6;jettySize=auto;orthogonalLoop=1;strokeWidth=1;dashed=1;fontSize=14;',
  },
}

export function DashedConnectorSingleArrow(props: NodeProps) {
  return (
    <Dependency
      {...props}
      _style={extendStyle(props, DASHED_CONNECTOR_SINGLE_ARROW)}
    />
  )
}
