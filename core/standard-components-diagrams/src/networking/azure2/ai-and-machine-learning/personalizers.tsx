import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PERSONALIZERS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Personalizers.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 55.2,
}

export function Personalizers(props: DiagramNodeProps) {
  return (
    <Shape
      {...PERSONALIZERS}
      {...props}
      _style={extendStyle(PERSONALIZERS, props)}
    />
  )
}
