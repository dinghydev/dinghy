import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BAMBOO = {
  _style: {
    entity:
      'image;image=img/lib/atlassian/Bamboo_Logo.svg;html=1;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 74,
}

export function Bamboo(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BAMBOO)} />
}
