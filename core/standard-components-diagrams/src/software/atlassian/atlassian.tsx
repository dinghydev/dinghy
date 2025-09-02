import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ATLASSIAN = {
  _style: {
    entity:
      'image;html=1;image=img/lib/atlassian/Atlassian_Logo.svg;strokeColor=none;',
  },
  _original_width: 66,
  _original_height: 66,
}

export function Atlassian(props: DiagramNodeProps) {
  return (
    <Shape {...ATLASSIAN} {...props} _style={extendStyle(ATLASSIAN, props)} />
  )
}
