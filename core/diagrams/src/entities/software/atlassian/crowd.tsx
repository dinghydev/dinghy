import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CROWD = {
  _style: {
    entity:
      'image;html=1;image=img/lib/atlassian/Crowd_Logo.svg;strokeColor=none;',
  },
  _original_width: 66,
  _original_height: 65,
}

export function Crowd(props: NodeProps) {
  return <Shape {...CROWD} {...props} _style={extendStyle(CROWD, props)} />
}
