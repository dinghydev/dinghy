import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const QUICKSTART_CENTER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Quickstart_Center.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function QuickstartCenter(props: DiagramNodeProps) {
  return (
    <Shape
      {...QUICKSTART_CENTER}
      {...props}
      _style={extendStyle(QUICKSTART_CENTER, props)}
    />
  )
}
