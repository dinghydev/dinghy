import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SEARCH_API = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.search_api',
  },
  _width: 60,
  _height: 60,
}

export function SearchApi(props: DiagramNodeProps) {
  return (
    <Shape {...SEARCH_API} {...props} _style={extendStyle(SEARCH_API, props)} />
  )
}
