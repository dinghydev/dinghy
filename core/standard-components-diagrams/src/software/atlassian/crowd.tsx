import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CROWD = {
  _style:
    'image;html=1;image=img/lib/atlassian/Crowd_Logo.svg;strokeColor=none;',
  _width: 66,
  _height: 65,
}

export function Crowd(props: DiagramNodeProps) {
  return <Shape {...CROWD} {...props} />
}
