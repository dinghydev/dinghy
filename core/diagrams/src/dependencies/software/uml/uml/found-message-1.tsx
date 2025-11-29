import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FOUND_MESSAGE_1 = {
  _style: {
    dependency:
      'html=1;verticalAlign=bottom;startArrow=oval;startFill=1;endArrow=block;startSize=8;curved=0;rounded=0;',
  },
}

export function FoundMessage1(props: NodeProps) {
  return <Dependency {...props} _style={extendStyle(props, FOUND_MESSAGE_1)} />
}
