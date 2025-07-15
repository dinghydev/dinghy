import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const REQUIRED_INTERFACE = {
  _style:
    'shape=requiredInterface;html=1;verticalLabelPosition=bottom;sketch=0;',
  _width: 10,
  _height: 20,
}

export function RequiredInterface(props: DiagramNodeProps) {
  return <Shape {...REQUIRED_INTERFACE} {...props} />
}
