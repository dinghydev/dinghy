import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATA_JACK = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/data_jack.svg;strokeColor=none;',
  },
  _width: 27.500000000000004,
  _height: 50,
}

export function DataJack(props: DiagramNodeProps) {
  return (
    <Shape {...DATA_JACK} {...props} _style={extendStyle(DATA_JACK, props)} />
  )
}
