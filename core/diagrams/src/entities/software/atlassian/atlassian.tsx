import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ATLASSIAN = {
  _style: {
    entity:
      'image;html=1;image=img/lib/atlassian/Atlassian_Logo.svg;strokeColor=none;',
  },
  _original_width: 66,
  _original_height: 66,
}

export function Atlassian(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ATLASSIAN)} />
}
