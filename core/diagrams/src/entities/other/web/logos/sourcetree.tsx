import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SOURCETREE = {
  _style: {
    entity:
      'image;image=img/lib/atlassian/Sourcetree_Logo.svg;html=1;strokeColor=none;',
  },
  _original_width: 57,
  _original_height: 71,
}

export function Sourcetree(props: DiagramNodeProps) {
  return (
    <Shape {...SOURCETREE} {...props} _style={extendStyle(SOURCETREE, props)} />
  )
}
