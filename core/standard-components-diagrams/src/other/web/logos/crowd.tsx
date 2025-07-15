import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CROWD = {
  _style: 'image;image=img/lib/atlassian/Crowd_Logo.svg;html=1;',
  _width: 66,
  _height: 65,
}

export function Crowd(props: DiagramNodeProps) {
  return <Shape {...CROWD} {...props} />
}
