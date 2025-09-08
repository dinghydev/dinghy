import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PROVIDED_INTERFACE = {
  _style: {
    dependency:
      'html=1;verticalAlign=bottom;labelBackgroundColor=none;endArrow=oval;endFill=0;endSize=8;',
  },
}

export function ProvidedInterface(props: DiagramNodeProps) {
  return (
    <Dependency
      {...PROVIDED_INTERFACE}
      {...props}
      _style={extendStyle(PROVIDED_INTERFACE, props)}
    />
  )
}
