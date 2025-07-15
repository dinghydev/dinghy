import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SEARCH_DOCUMENTS = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.search_documents;fillColor=#F58534;gradientColor=none;',
  _width: 60,
  _height: 63,
}

export function SearchDocuments(props: DiagramNodeProps) {
  return <Shape {...SEARCH_DOCUMENTS} {...props} />
}
