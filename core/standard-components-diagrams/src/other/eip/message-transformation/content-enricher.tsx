import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTENT_ENRICHER = {
  _style: {
    entity:
      'html=1;strokeWidth=2;outlineConnect=0;dashed=0;align=center;fontSize=8;fillColor=#c0f5a9;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.eip.content_enricher;',
  },
  _width: 150,
  _height: 90,
}

export function ContentEnricher(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTENT_ENRICHER}
      {...props}
      _style={extendStyle(CONTENT_ENRICHER, props)}
    />
  )
}
