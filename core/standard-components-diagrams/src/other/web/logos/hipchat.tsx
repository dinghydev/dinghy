import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HIPCHAT = {
  _style: {
    entity:
      'image;image=img/lib/atlassian/Hipchat_Logo.svg;html=1;strokeColor=none;',
  },
  _original_width: 66,
  _original_height: 62,
}

export function Hipchat(props: DiagramNodeProps) {
  return <Shape {...HIPCHAT} {...props} _style={extendStyle(HIPCHAT, props)} />
}
