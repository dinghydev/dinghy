import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATA_FACTORIES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/Data_Factory.svg;',
  _width: 68,
  _height: 68,
}

export function DataFactories(props: DiagramNodeProps) {
  return <Shape {...DATA_FACTORIES} {...props} />
}
