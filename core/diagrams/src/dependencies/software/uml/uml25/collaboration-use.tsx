import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COLLABORATION_USE = {
  _style: {
    dependency:
      'html=1;verticalAlign=bottom;labelBackgroundColor=none;endArrow=open;endFill=0;dashed=1;',
  },
}

export function CollaborationUse(props: NodeProps) {
  return (
    <Dependency {...props} _style={extendStyle(props, COLLABORATION_USE)} />
  )
}
