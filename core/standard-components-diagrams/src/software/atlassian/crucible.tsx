import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CRUCIBLE = {
  _style: 'image;html=1;image=img/lib/atlassian/Crucible_Logo.svg;',
  _width: 61,
  _height: 61,
}

export function Crucible(props: DiagramNodeProps) {
  return <Shape {...CRUCIBLE} {...props} />
}
