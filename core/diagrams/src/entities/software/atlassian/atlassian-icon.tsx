import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ATLASSIAN_ICON = {
  _style: {
    entity:
      'image;html=1;image=img/lib/atlassian/Atlassian_Logo.svg;strokeColor=none;',
  },
  _original_width: 66,
  _original_height: 66,
}

export function AtlassianIcon(props: DiagramNodeProps) {
  return (
    <Shape
      {...ATLASSIAN_ICON}
      {...props}
      _style={extendStyle(ATLASSIAN_ICON, props)}
    />
  )
}
