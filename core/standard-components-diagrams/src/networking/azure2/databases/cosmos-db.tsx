import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COSMOS_DB = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/Azure_Cosmos_DB.svg;',
  _width: 64,
  _height: 64,
}

export function CosmosDb(props: DiagramNodeProps) {
  return <Shape {...COSMOS_DB} {...props} />
}
