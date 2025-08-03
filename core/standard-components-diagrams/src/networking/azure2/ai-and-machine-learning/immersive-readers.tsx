import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IMMERSIVE_READERS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Immersive_Readers.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function ImmersiveReaders(props: DiagramNodeProps) {
  return <Shape {...IMMERSIVE_READERS} {...props} />
}
