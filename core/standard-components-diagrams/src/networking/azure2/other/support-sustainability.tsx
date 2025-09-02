import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUPPORT_SUSTAINABILITY = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Sustainability.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function SupportSustainability(props: DiagramNodeProps) {
  return (
    <Shape
      {...SUPPORT_SUSTAINABILITY}
      {...props}
      _style={extendStyle(SUPPORT_SUSTAINABILITY, props)}
    />
  )
}
