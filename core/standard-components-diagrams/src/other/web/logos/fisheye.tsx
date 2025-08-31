import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FISHEYE = {
  _style: {
    entity:
      'image;image=img/lib/atlassian/Fisheye_Logo.svg;html=1;strokeColor=none;',
  },
  _width: 71,
  _height: 59,
}

export function Fisheye(props: DiagramNodeProps) {
  return <Shape {...FISHEYE} {...props} _style={extendStyle(FISHEYE, props)} />
}
