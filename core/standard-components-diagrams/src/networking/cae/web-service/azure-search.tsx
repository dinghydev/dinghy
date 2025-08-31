import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AZURE_SEARCH = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Search.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function AzureSearch(props: DiagramNodeProps) {
  return (
    <Shape
      {...AZURE_SEARCH}
      {...props}
      _style={extendStyle(AZURE_SEARCH, props)}
    />
  )
}
