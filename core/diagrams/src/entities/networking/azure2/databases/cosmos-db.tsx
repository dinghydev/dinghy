import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COSMOS_DB = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/Azure_Cosmos_DB.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 64,
}

export function CosmosDb(props: NodeProps) {
  return (
    <Shape {...COSMOS_DB} {...props} _style={extendStyle(COSMOS_DB, props)} />
  )
}
