import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SEARCH_DOCUMENTS = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.search_documents;fillColor=#F58534;gradientColor=none;',
  _width: 60,
  _height: 63,
}

export function SearchDocuments(props: DiagramNodeProps) {
  return (
    <Shape
      {...SEARCH_DOCUMENTS}
      {...props}
      _style={extendStyle(SEARCH_DOCUMENTS, props)}
    />
  )
}
