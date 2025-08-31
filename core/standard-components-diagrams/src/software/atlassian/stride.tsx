import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STRIDE = {
  _style: {
    entity:
      'image;html=1;image=img/lib/atlassian/Stride_Logo.svg;strokeColor=none;',
  },
  _width: 69,
  _height: 57,
}

export function Stride(props: DiagramNodeProps) {
  return <Shape {...STRIDE} {...props} _style={extendStyle(STRIDE, props)} />
}
