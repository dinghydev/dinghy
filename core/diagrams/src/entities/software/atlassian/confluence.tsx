import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONFLUENCE = {
  _style: {
    entity:
      'image;html=1;image=img/lib/atlassian/Confluence_Logo.svg;strokeColor=none;',
  },
  _original_width: 63,
  _original_height: 57,
}

export function Confluence(props: NodeProps) {
  return (
    <Shape {...CONFLUENCE} {...props} _style={extendStyle(CONFLUENCE, props)} />
  )
}
