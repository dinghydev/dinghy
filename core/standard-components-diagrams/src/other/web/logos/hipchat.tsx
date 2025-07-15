import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HIPCHAT = {
  _style: 'image;image=img/lib/atlassian/Hipchat_Logo.svg;html=1;',
  _width: 66,
  _height: 62,
}

export function Hipchat(props: DiagramNodeProps) {
  return <Shape {...HIPCHAT} {...props} />
}
