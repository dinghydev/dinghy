import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MULTIVALUE_ATTRIBUTE = {
  _style:
    'ellipse;shape=doubleEllipse;margin=3;whiteSpace=wrap;html=1;align=center;',
  _width: 100,
  _height: 40,
}

export function MultivalueAttribute(props: DiagramNodeProps) {
  return <Shape {...MULTIVALUE_ATTRIBUTE} {...props} />
}
