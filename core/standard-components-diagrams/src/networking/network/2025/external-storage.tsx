import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EXTERNAL_STORAGE = {
  _style:
    'shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.external_storage;network2IconYOffset=-0.0267;network2IconW=1;network2IconH=0.7987;',
  _width: 50,
  _height: 39.934999999999995,
}

export function ExternalStorage(props: DiagramNodeProps) {
  return <Shape {...EXTERNAL_STORAGE} {...props} />
}
