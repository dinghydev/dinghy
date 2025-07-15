import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MODULE = {
  _style:
    'shape=module;align=left;spacingLeft=20;align=center;verticalAlign=top;whiteSpace=wrap;html=1;',
  _width: 100,
  _height: 50,
}

export function Module(props: DiagramNodeProps) {
  return <Shape {...MODULE} {...props} />
}
