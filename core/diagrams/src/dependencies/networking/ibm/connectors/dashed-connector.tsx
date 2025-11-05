import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DASHED_CONNECTOR = {
  _style: {
    dependency:
      'html=1;labelBackgroundColor=#ffffff;endArrow=none;endFill=0;jettySize=auto;orthogonalLoop=1;strokeWidth=1;dashed=1;fontSize=14;',
  },
}

export function DashedConnector(props: NodeProps) {
  return (
    <Dependency
      {...DASHED_CONNECTOR}
      {...props}
      _style={extendStyle(DASHED_CONNECTOR, props)}
    />
  )
}
