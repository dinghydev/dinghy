import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const QUICK_START_CENTER = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Quick_Start_Center.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function QuickStartCenter(props: DiagramNodeProps) {
  return (
    <Shape
      {...QUICK_START_CENTER}
      {...props}
      _style={extendStyle(QUICK_START_CENTER, props)}
    />
  )
}
