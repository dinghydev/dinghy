import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HIPCHAT = {
  _style: {
    entity:
      'image;image=img/lib/atlassian/Hipchat_Logo.svg;html=1;strokeColor=none;',
  },
  _original_width: 66,
  _original_height: 62,
}

export function Hipchat(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, HIPCHAT)} />
}
