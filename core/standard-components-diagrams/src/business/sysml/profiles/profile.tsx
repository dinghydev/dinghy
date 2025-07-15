import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PROFILE = {
  _style:
    'shape=folder;tabWidth=80;tabHeight=20;tabPosition=left;html=1;whiteSpace=wrap;align=center;',
  _width: 160,
  _height: 100,
}

export function Profile(props: DiagramNodeProps) {
  return <Shape {...PROFILE} {...props} />
}
