import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COSMOS_DB = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/Azure_Cosmos_DB.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function CosmosDb(props: DiagramNodeProps) {
  return (
    <Shape {...COSMOS_DB} {...props} _style={extendStyle(COSMOS_DB, props)} />
  )
}
