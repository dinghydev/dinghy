import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PROVIDED_INTERFACE = {
  _style: {
    dependency:
      'html=1;verticalAlign=bottom;labelBackgroundColor=none;endArrow=oval;endFill=0;endSize=8;',
  },
}

export function ProvidedInterface(props: NodeProps) {
  return (
    <Dependency
      {...PROVIDED_INTERFACE}
      {...props}
      _style={extendStyle(PROVIDED_INTERFACE, props)}
    />
  )
}
