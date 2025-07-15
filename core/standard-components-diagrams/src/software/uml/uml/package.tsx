import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PACKAGE = {
  _style:
    'shape=folder;fontStyle=1;spacingTop=10;tabWidth=40;tabHeight=14;tabPosition=left;html=1;whiteSpace=wrap;',
  _width: 70,
  _height: 50,
}

export function Package(props: DiagramNodeProps) {
  return <Shape {...PACKAGE} {...props} />
}
