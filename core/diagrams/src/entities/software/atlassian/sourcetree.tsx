import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SOURCETREE = {
  _style: {
    entity:
      'image;html=1;image=img/lib/atlassian/Sourcetree_Logo.svg;strokeColor=none;',
  },
  _original_width: 57,
  _original_height: 71,
}

export function Sourcetree(props: NodeProps) {
  return (
    <Shape {...SOURCETREE} {...props} _style={extendStyle(SOURCETREE, props)} />
  )
}
