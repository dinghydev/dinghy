import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const REQUIRED_INTERFACE = {
  _style: {
    dependency:
      'html=1;verticalAlign=bottom;labelBackgroundColor=none;endArrow=halfCircle;endFill=0;endSize=2;',
  },
}

export function RequiredInterface(props: DiagramNodeProps) {
  return <Dependency {...REQUIRED_INTERFACE} {...props} />
}
