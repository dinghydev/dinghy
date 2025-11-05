import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AGGREGATION_2 = {
  _style: {
    dependency: 'endArrow=diamondThin;endFill=0;endSize=24;html=1;',
  },
}

export function Aggregation2(props: NodeProps) {
  return (
    <Dependency
      {...AGGREGATION_2}
      {...props}
      _style={extendStyle(AGGREGATION_2, props)}
    />
  )
}
