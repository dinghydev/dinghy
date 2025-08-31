import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IMMERSIVE_READERS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Immersive_Readers.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function ImmersiveReaders(props: DiagramNodeProps) {
  return (
    <Shape
      {...IMMERSIVE_READERS}
      {...props}
      _style={extendStyle(IMMERSIVE_READERS, props)}
    />
  )
}
