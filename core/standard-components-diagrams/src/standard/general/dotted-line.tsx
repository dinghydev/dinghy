import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DOTTED_LINE = {
  _style: 'endArrow=none;dashed=1;html=1;dashPattern=1 3;strokeWidth=2;',
  _width: 50,
  _height: 50,
}

export function DottedLine(props: DiagramNodeProps) {
  return <Dependency {...DOTTED_LINE} {...props} />
}
