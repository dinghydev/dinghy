import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONNECTOR_GREY_3 = {
  _style: {
    dependency:
      'edgeStyle=none;rounded=0;html=1;entryX=0;entryY=0.5;jettySize=auto;orthogonalLoop=1;strokeColor=#404040;strokeWidth=2;fontColor=#000000;jumpStyle=none;endArrow=block;endFill=1;startArrow=block;startFill=1;',
  },
}

export function ConnectorGrey3(props: NodeProps) {
  return (
    <Dependency
      {...CONNECTOR_GREY_3}
      {...props}
      _style={extendStyle(CONNECTOR_GREY_3, props)}
    />
  )
}
