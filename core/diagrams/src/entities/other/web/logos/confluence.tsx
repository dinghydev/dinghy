import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONFLUENCE = {
  _style: {
    entity:
      'image;image=img/lib/atlassian/Confluence_Logo.svg;html=1;strokeColor=none;',
  },
  _original_width: 63,
  _original_height: 57,
}

export function Confluence(props: NodeProps) {
  return (
    <Shape {...CONFLUENCE} {...props} _style={extendStyle(CONFLUENCE, props)} />
  )
}
