import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FISHEYE = {
  _style: {
    entity:
      'image;image=img/lib/atlassian/Fisheye_Logo.svg;html=1;strokeColor=none;',
  },
  _original_width: 71,
  _original_height: 59,
}

export function Fisheye(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FISHEYE)} />
}
