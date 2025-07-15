import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STRIDE = {
  _style: 'image;image=img/lib/atlassian/Stride_Logo.svg;html=1;',
  _width: 69,
  _height: 57,
}

export function Stride(props: DiagramNodeProps) {
  return <Shape {...STRIDE} {...props} />
}
