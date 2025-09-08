import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FISHEYE = {
  _style: {
    entity:
      'image;html=1;image=img/lib/atlassian/Fisheye_Logo.svg;strokeColor=none;',
  },
  _original_width: 71,
  _original_height: 59,
}

export function Fisheye(props: DiagramNodeProps) {
  return <Shape {...FISHEYE} {...props} _style={extendStyle(FISHEYE, props)} />
}
