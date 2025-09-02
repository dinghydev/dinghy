import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const UNIVERSAL_PRINT = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Universal_Print.svg;strokeColor=none;',
  },
  _original_width: 70,
  _original_height: 60,
}

export function UniversalPrint(props: DiagramNodeProps) {
  return (
    <Shape
      {...UNIVERSAL_PRINT}
      {...props}
      _style={extendStyle(UNIVERSAL_PRINT, props)}
    />
  )
}
