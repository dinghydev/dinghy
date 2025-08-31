import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HIPCHAT = {
  _style:
    'image;html=1;image=img/lib/atlassian/Hipchat_Logo.svg;strokeColor=none;',
  _width: 66,
  _height: 62,
}

export function Hipchat(props: DiagramNodeProps) {
  return <Shape {...HIPCHAT} {...props} _style={extendStyle(HIPCHAT, props)} />
}
