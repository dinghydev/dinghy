import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const A_CONST = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_A.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 64.12,
}

export function A(props: DiagramNodeProps) {
  return <Shape {...A_CONST} {...props} _style={extendStyle(A_CONST, props)} />
}
