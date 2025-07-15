import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STATUSPAGE = {
  _style: 'image;html=1;image=img/lib/atlassian/Statuspage_Logo.svg;',
  _width: 75,
  _height: 52,
}

export function Statuspage(props: DiagramNodeProps) {
  return <Shape {...STATUSPAGE} {...props} />
}
