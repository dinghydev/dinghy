import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PRODUCTION_READY_DATABASE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Production_Ready_Database.svg;strokeColor=none;',
  _width: 48,
  _height: 64,
}

export function ProductionReadyDatabase(props: DiagramNodeProps) {
  return <Shape {...PRODUCTION_READY_DATABASE} {...props} />
}
