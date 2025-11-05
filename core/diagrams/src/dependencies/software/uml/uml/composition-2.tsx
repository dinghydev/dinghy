import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPOSITION_2 = {
  _style: {
    dependency: 'endArrow=diamondThin;endFill=1;endSize=24;html=1;',
  },
}

export function Composition2(props: NodeProps) {
  return (
    <Dependency
      {...COMPOSITION_2}
      {...props}
      _style={extendStyle(COMPOSITION_2, props)}
    />
  )
}
