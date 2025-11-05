import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATA_SOURCES = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/data/data_sources.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function DataSources(props: NodeProps) {
  return (
    <Shape
      {...DATA_SOURCES}
      {...props}
      _style={extendStyle(DATA_SOURCES, props)}
    />
  )
}
