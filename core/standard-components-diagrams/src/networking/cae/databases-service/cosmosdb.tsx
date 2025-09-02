import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COSMOSDB = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/CosmosDB.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Cosmosdb(props: DiagramNodeProps) {
  return (
    <Shape {...COSMOSDB} {...props} _style={extendStyle(COSMOSDB, props)} />
  )
}
