import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HIPCHAT = {
  _style: 'image;html=1;image=img/lib/atlassian/Hipchat_Logo.svg;',
  _width: 66,
  _height: 62,
}

export function Hipchat(props: DiagramNodeProps) {
  return <Shape {...HIPCHAT} {...props} />
}
