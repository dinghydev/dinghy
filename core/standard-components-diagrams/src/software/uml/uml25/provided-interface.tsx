import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PROVIDED_INTERFACE = {
  _style:
    'html=1;verticalAlign=bottom;labelBackgroundColor=none;endArrow=oval;endFill=0;endSize=8;',
  _width: 160,
  _height: 0,
}

export function ProvidedInterface(props: DiagramNodeProps) {
  return <Dependency {...PROVIDED_INTERFACE} {...props} />
}
