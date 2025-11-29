import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INNER_CLASS = {
  _style: {
    dependency:
      'endArrow=circlePlus;startArrow=none;endFill=0;startFill=0;endSize=8;html=1;labelBackgroundColor=none;',
  },
}

export function InnerClass(props: NodeProps) {
  return <Dependency {...props} _style={extendStyle(props, INNER_CLASS)} />
}
