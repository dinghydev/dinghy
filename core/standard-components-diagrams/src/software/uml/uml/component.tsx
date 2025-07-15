import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPONENT = {
  _style: 'html=1;dropTarget=0;whiteSpace=wrap;',
  _width: 0,
  _height: 90,
}

export function Component(props: DiagramNodeProps) {
  return <Shape {...COMPONENT} {...props} />
}
