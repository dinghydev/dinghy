import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STATUSPAGE = {
  _style: 'image;image=img/lib/atlassian/Statuspage_Logo.svg;html=1;',
  _width: 75,
  _height: 52,
}

export function Statuspage(props: DiagramNodeProps) {
  return <Shape {...STATUSPAGE} {...props} />
}
