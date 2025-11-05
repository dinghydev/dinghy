import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BAMBOO = {
  _style: {
    entity:
      'image;html=1;image=img/lib/atlassian/Bamboo_Logo.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 74,
}

export function Bamboo(props: NodeProps) {
  return <Shape {...BAMBOO} {...props} _style={extendStyle(BAMBOO, props)} />
}
