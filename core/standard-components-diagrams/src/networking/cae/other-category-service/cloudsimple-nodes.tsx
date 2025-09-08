import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLOUDSIMPLE_NODES = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/CloudSimple_Nodes.svg;strokeColor=none;',
  },
  _original_width: 49,
  _original_height: 50,
}

export function CloudsimpleNodes(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUDSIMPLE_NODES}
      {...props}
      _style={extendStyle(CLOUDSIMPLE_NODES, props)}
    />
  )
}
