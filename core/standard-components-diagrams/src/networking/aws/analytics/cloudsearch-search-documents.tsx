import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLOUDSEARCH_SEARCH_DOCUMENTS = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.search_documents;',
  },
  _original_width: 68,
  _original_height: 78,
}

export function CloudsearchSearchDocuments(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUDSEARCH_SEARCH_DOCUMENTS}
      {...props}
      _style={extendStyle(CLOUDSEARCH_SEARCH_DOCUMENTS, props)}
    />
  )
}
