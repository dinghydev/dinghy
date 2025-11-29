import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COGNITIVE_SERVICES = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Cognitive_Services.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 30,
}

export function CognitiveServices(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, COGNITIVE_SERVICES)} />
}
