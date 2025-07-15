import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BLUEPRINTS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Blueprints.svg;',
  _width: 50,
  _height: 48,
}

export function Blueprints(props: DiagramNodeProps) {
  return <Shape {...BLUEPRINTS} {...props} />
}
