import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ATLASSIAN = {
  _style:
    'image;image=img/lib/atlassian/Atlassian_Logo.svg;html=1;strokeColor=none;',
  _width: 66,
  _height: 66,
}

export function Atlassian(props: DiagramNodeProps) {
  return <Shape {...ATLASSIAN} {...props} />
}
