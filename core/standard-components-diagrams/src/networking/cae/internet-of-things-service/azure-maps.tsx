import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AZURE_MAPS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_Maps.svg;strokeColor=none;',
  },
  _width: 39,
  _height: 50,
}

export function AzureMaps(props: DiagramNodeProps) {
  return (
    <Shape {...AZURE_MAPS} {...props} _style={extendStyle(AZURE_MAPS, props)} />
  )
}
