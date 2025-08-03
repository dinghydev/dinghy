import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BATCH_AI = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Batch_AI.svg;strokeColor=none;',
  _width: 36,
  _height: 50,
}

export function BatchAi(props: DiagramNodeProps) {
  return <Shape {...BATCH_AI} {...props} />
}
