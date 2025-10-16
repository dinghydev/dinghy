import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ATLASSIAN = {
  _style: {
    entity:
      'image;image=img/lib/atlassian/Atlassian_Logo.svg;html=1;strokeColor=none;',
  },
  _original_width: 66,
  _original_height: 66,
}

export function Atlassian(props: DiagramNodeProps) {
  return (
    <Shape {...ATLASSIAN} {...props} _style={extendStyle(ATLASSIAN, props)} />
  )
}
