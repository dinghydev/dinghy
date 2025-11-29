import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SOURCETREE = {
  _style: {
    entity:
      'image;image=img/lib/atlassian/Sourcetree_Logo.svg;html=1;strokeColor=none;',
  },
  _original_width: 57,
  _original_height: 71,
}

export function Sourcetree(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SOURCETREE)} />
}
