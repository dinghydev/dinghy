import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATA_FACTORIES = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Data_Factory.svg;strokeColor=none;',
  _width: 50,
  _height: 50,
}

export function DataFactories(props: DiagramNodeProps) {
  return <Shape {...DATA_FACTORIES} {...props} />
}
