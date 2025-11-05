import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PRODUCTION_READY_DATABASE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Production_Ready_Database.svg;strokeColor=none;',
  },
  _original_width: 48,
  _original_height: 64,
}

export function ProductionReadyDatabase(props: NodeProps) {
  return (
    <Shape
      {...PRODUCTION_READY_DATABASE}
      {...props}
      _style={extendStyle(PRODUCTION_READY_DATABASE, props)}
    />
  )
}
