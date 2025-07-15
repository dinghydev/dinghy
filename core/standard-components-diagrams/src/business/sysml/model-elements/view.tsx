import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VIEW = {
  _style:
    'shape=folder;html=1;tabWidth=80;tabHeight=40;tabPosition=left;align=left;verticalAlign=top;spacingLeft=10;whiteSpace=wrap;',
  _width: 160,
  _height: 120,
}

export function View(props: DiagramNodeProps) {
  return <Shape {...VIEW} {...props} />
}
