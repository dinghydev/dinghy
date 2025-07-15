import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PACKAGE = {
  _style:
    'shape=folder;fontStyle=1;tabWidth=80;tabHeight=30;tabPosition=left;html=1;boundedLbl=1;whiteSpace=wrap;',
  _width: 150,
  _height: 80,
}

export function Package(props: DiagramNodeProps) {
  return <Shape {...PACKAGE} {...props} />
}
