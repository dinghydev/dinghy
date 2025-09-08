import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CONDITIONAL_ACCESS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Security_Center.svg;strokeColor=none;',
  },
  _original_width: 36,
  _original_height: 50,
}

export function ConditionalAccess(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONDITIONAL_ACCESS}
      {...props}
      _style={extendStyle(CONDITIONAL_ACCESS, props)}
    />
  )
}
