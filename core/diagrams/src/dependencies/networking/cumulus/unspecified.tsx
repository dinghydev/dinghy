import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const UNSPECIFIED = {
  _style: {
    dependency: 'endArrow=block;html=1;startArrow=block;startFill=1;endFill=1;',
  },
}

export function Unspecified(props: NodeProps) {
  return (
    <Dependency
      {...UNSPECIFIED}
      {...props}
      _style={extendStyle(UNSPECIFIED, props)}
    />
  )
}
