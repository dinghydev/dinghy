import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATA_FACTORIES = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Data_Factory.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function DataFactories(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATA_FACTORIES}
      {...props}
      _style={extendStyle(DATA_FACTORIES, props)}
    />
  )
}
