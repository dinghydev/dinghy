import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOVER = {
  _style:
    'image;html=1;image=img/lib/atlassian/Clover_Logo.svg;strokeColor=none;',
  _width: 71,
  _height: 71,
}

export function Clover(props: DiagramNodeProps) {
  return <Shape {...CLOVER} {...props} />
}
