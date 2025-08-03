import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FISHEYE = {
  _style:
    'image;image=img/lib/atlassian/Fisheye_Logo.svg;html=1;strokeColor=none;',
  _width: 71,
  _height: 59,
}

export function Fisheye(props: DiagramNodeProps) {
  return <Shape {...FISHEYE} {...props} />
}
