import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OPAQUE_ACTION = {
  _style: 'text;align=center;verticalAlign=middle;dashed=0;whiteSpace=wrap;',
  _width: 140,
  _height: 40,
}

export function OpaqueAction(props: DiagramNodeProps) {
  return <Shape {...OPAQUE_ACTION} {...props} />
}
