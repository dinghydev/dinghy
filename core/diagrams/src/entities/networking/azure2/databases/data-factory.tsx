import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATA_FACTORY = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/Data_Factory.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
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
