import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VIRTUAL = {
  _style: {
    dependency:
      'endArrow=block;html=1;startArrow=block;startFill=1;endFill=1;strokeColor=#EB4770;dashed=1;dashPattern=5 5;',
  },
}

export function Virtual(props: NodeProps) {
  return (
    <Dependency {...VIRTUAL} {...props} _style={extendStyle(VIRTUAL, props)} />
  )
}
