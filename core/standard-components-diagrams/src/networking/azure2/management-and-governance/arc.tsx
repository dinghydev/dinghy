import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARC = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Azure_Arc.svg;strokeColor=none;',
  },
  _original_width: 69,
  _original_height: 52,
}

export function Arc(props: DiagramNodeProps) {
  return <Shape {...ARC} {...props} _style={extendStyle(ARC, props)} />
}
