import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BATCH_AI = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Batch_AI.svg;strokeColor=none;',
  },
  _width: 36,
  _height: 50,
}

export function BatchAi(props: DiagramNodeProps) {
  return (
    <Shape {...BATCH_AI} {...props} _style={extendStyle(BATCH_AI, props)} />
  )
}
