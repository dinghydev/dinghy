import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SEARCH_GREEN = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;align=center;fillColor=#2D9C5E;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.search',
  },
  _width: 99,
  _height: 100,
}

export function SearchGreen(props: DiagramNodeProps) {
  return (
    <Shape
      {...SEARCH_GREEN}
      {...props}
      _style={extendStyle(SEARCH_GREEN, props)}
    />
  )
}
