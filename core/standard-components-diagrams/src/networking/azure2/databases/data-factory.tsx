import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATA_FACTORY = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/Data_Factory.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function DataFactory(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATA_FACTORY}
      {...props}
      _style={extendStyle(DATA_FACTORY, props)}
    />
  )
}
