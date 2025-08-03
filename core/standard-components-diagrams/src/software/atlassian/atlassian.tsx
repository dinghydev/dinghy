import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ATLASSIAN = {
  _style:
    'image;html=1;image=img/lib/atlassian/Atlassian_Logo.svg;strokeColor=none;',
  _width: 66,
  _height: 66,
}

export function Atlassian(props: DiagramNodeProps) {
  return <Shape {...ATLASSIAN} {...props} />
}
