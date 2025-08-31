import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HIPCHAT = {
  _style:
    'image;image=img/lib/atlassian/Hipchat_Logo.svg;html=1;strokeColor=none;',
  _width: 66,
  _height: 62,
}

export function Hipchat(props: DiagramNodeProps) {
  return <Shape {...HIPCHAT} {...props} _style={extendStyle(HIPCHAT, props)} />
}
