import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOUDSIMPLE_NODES = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/CloudSimple_Nodes.svg;strokeColor=none;',
  _width: 49,
  _height: 50,
}

export function CloudsimpleNodes(props: DiagramNodeProps) {
  return <Shape {...CLOUDSIMPLE_NODES} {...props} />
}
