import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DERIVED_ATTRIBUTE = {
  _style: 'ellipse;whiteSpace=wrap;html=1;align=center;dashed=1;',
  _width: 100,
  _height: 40,
}

export function DerivedAttribute(props: DiagramNodeProps) {
  return <Shape {...DERIVED_ATTRIBUTE} {...props} />
}
